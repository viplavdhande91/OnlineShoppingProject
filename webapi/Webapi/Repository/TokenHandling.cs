using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Webapi.Models.Domains;

namespace Webapi.Repository
{
    public class TokenHandling : ITokenHandling
    {
        private readonly IConfiguration configuration;

        public TokenHandling(IConfiguration configuration)
        {
            this.configuration = configuration;
        }

        public Task<string?>GenerateTokenAsync(string? email)
        {

            var tokenhandler = new JwtSecurityTokenHandler();

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(this.configuration["Jwt:Key"]));
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);


            var claims = new[]
            {
                new Claim(ClaimTypes.Email,email)
            };
            var token = new JwtSecurityToken(
                configuration["Jwt:Issuer"],
                configuration["Jwt:Audience"],
                claims,
                expires: DateTime.Now.AddMinutes(15),
                signingCredentials: credentials);

            return Task.FromResult(new JwtSecurityTokenHandler().WriteToken(token));
        }

    

       
    }
}
