using Webapi.Models.Domains;

namespace Webapi.Repository
{
    public interface ITokenHandling
    {
        Task<string?> GenerateTokenAsync(string? email);

    }
}
