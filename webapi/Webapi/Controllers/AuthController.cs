using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Data;
using Webapi.Data;
using Webapi.Models.Domains;
using Webapi.Repository;

namespace Webapi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthController : Controller
    {
       

        private readonly ITokenHandling _tokenHandling;

        private readonly DataContext _db;

        private readonly IUserHandling _userHandling;

        public AuthController(ITokenHandling tokenHandling, DataContext db,IUserHandling userHandling)
        {
            _tokenHandling = tokenHandling;
            _db = db;
            _userHandling = userHandling;
        }

        [HttpPost]
        [Route("signup")]



        public async Task<int> SignUpDetails(User user)
        {
            
            _db.Add(user);
            int response = await _db.SaveChangesAsync();
            return response;
        }


        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> LoginAsync(User? userRecieved)
        {
            // Check if user is authenticated
            // Check username and password
            
            var user = await _userHandling.AuthenticateAsync(userRecieved.EmailAddress, userRecieved.Password);
          
            if (user != null )
            {
                // Generate a JWT Token
                var token = await _tokenHandling.GenerateTokenAsync(user.EmailAddress);
                return Ok(token);
            }

            return BadRequest("Username or Password is incorrect.");
        }

    }
}