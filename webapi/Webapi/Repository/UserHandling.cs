using Webapi.Data;
using Webapi.Models.Domains;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

namespace Webapi.Repository
{
    public class UserHandling :IUserHandling
    {
        private readonly DataContext _dbContext;

        public UserHandling(DataContext dbContext)
        {
            this._dbContext = dbContext;
        }

        public async Task<User?> AuthenticateAsync(string? email, string? password)
        {
            var user = await _dbContext.Users.FirstOrDefaultAsync(x => x.EmailAddress == email && x.Password == password);

            if (user == null)
            {
                return null;
            }

          return user;
        }


      
    }
}
