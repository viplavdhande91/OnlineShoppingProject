using Webapi.Models.Domains;

namespace Webapi.Repository
{
    public interface IUserRepository
    {
        Task<User> AuthenticateAsync(string email, string password);

    }
}
