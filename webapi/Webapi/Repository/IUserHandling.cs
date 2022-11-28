using Webapi.Models.Domains;

namespace Webapi.Repository
{
    public interface IUserHandling
    {
        public Task<User?> AuthenticateAsync(string? email, string? password);

    }
}
