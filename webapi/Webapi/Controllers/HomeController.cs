using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using Webapi.Data;
using Webapi.Models.Domains;
using System.Text.Json;

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



        [HttpGet] // Set the attribute to Read
        [Authorize]
        public String Read()
        {


            // Return the list of data from the database
            //var data = _context.Users.ToList();
            //string jsonString = JsonSerializer.Serialize(data);

            return "AccessGranted";

        }







    }
}
