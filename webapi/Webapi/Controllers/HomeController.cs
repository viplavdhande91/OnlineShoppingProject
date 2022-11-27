using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Webapi.Data;
using Webapi.Models.Domains;

namespace Webapi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HomeController : Controller
    {
        private readonly DataContext _context;

        public HomeController(DataContext context)
        {
            _context = context;
        }
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }


        [HttpPost]
        public async Task<OkResult> Post(User user)
        {
            _context.Add(user);
            await _context.SaveChangesAsync();
            return Ok();
        }


    }
}
