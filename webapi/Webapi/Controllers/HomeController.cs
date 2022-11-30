using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using Webapi.Data;
using Webapi.Models.Domains;
using System.Text.Json;
using System.Linq;

namespace Webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : Controller
    {
        private readonly DataContext _context;

        public HomeController(DataContext context)
        {
            _context = context;
        }



        //[HttpGet] // Set the attribute to Read
        //[Authorize]
        //public String Read()
        //{


        //    // Return the list of data from the database
        //    //var data = _context.Users.ToList();
        //    //string jsonString = JsonSerializer.Serialize(data);

        //    return "AccessGranted";

        //}


        [HttpGet("{email}")] // Set the attribute to Read
        [Authorize]
        public String Read(string email)
        {
            var userid = _context.Users.Where(c => c.EmailAddress.Equals(email)).Select(u => u.UserId).FirstOrDefault(); ;

            var product = _context.Orders.Where(x => x.UserId == userid);



            //var customerId = userId.Select(x => x.UserId).ToList();
            //var customers = _context.Orders.Where(x => customerId.Contains(email));
            string jsonString = JsonSerializer.Serialize(product);
            return jsonString;
            
        }

    }
}
