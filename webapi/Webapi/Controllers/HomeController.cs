using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using Webapi.Data;
using Webapi.Models.Domains;
using System.Text.Json;
using System.Linq;
using Microsoft.Extensions.Options;
using Webapi.Models.DTO;
using Azure;
using System.Text.RegularExpressions;

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
            List<BillingInfo> billingData = (_context.BillingInfos.Where(c => c.Username.Equals(email)) as IEnumerable<BillingInfo>).ToList();

            List<Guid> _billingIds = new List<Guid>();


            Dictionary<Guid, List<Guid> > billingIdsAndProductIds = new Dictionary<Guid, List<Guid>>();
            var orders = _context.Orders;

          //  var productList = _context.Products;

            Dictionary<Guid, List<IQueryable>> ProductsResponseMap = new Dictionary<Guid, List<IQueryable>>();

            if (billingData != null)
            {

                //GET LIST OF ALL BILLING IDS

                for (int i = 0;i<billingData.Count; i++)
                {

                    _billingIds.Add(billingData[i].billingId);

                }

                //GET LIST OF ALL PRODUCT IDS CORRESSPONDING TO A SINGLE BILLING ID

                
                    foreach (var billingid in _billingIds)
                    {
                        if (orders != null)
                        {
                            List<Guid> productIds = new List<Guid>();

                            foreach (var order in orders)
                            {

                                if (billingid.Equals(order.billingId))
                                {
                                    productIds.Add(order.ProductId);

                                }
                            }

                            billingIdsAndProductIds.Add(billingid, productIds);

                            
                        }
                    }

                //GET PRODUCTS WITH RESPECT TO BILLING IDS
                foreach (var (key, value) in billingIdsAndProductIds)
                    {
                    List<IQueryable> product = new List<IQueryable>();

                    foreach (var productId_ in value)
                    {

                        product.Add(_context.Products.Where(x => x.ProductId.Equals(productId_)));
                    

                    }
                    ProductsResponseMap.Add(key,product);
                    
                }

            }

            string jsonString = JsonSerializer.Serialize(ProductsResponseMap);
            return jsonString;
            
        }



        [Route("ProductsList")]

        [HttpGet] // Set the attribute to Read
        public String ProductsList()
        {

            var productList = _context.Products;
            string jsonString = JsonSerializer.Serialize(productList);
            return jsonString;

        }

        [Route("users/{username}")]

        [HttpGet] // Set the attribute to Read
        [Authorize]
        public String GetUsers(string username)
        {
            //string patternText = "@admin.com";
            //Regex reg = new Regex(patternText);

            var users = _context.Users.Where(x =>  (x.Role != "Seller"));

            string jsonString = JsonSerializer.Serialize(users);
            return jsonString;

        }





        [Route("billingInfo/{username}")]

        [HttpGet] // Set the attribute to Read
        [Authorize]
        public String BillingInfo(string username)
        {

            var ordersOfCurrentUsers = _context.Orders.Where(x => x.UserName == username);

            string jsonString = JsonSerializer.Serialize(ordersOfCurrentUsers);
            return jsonString;

        }





        [Route("billingInfoCost/{username}")]

        [HttpGet] // Set the attribute to Read
        [Authorize]
        public String billingInfoCost(string username)
        {

            var ordersOfCurrentUsers = _context.BillingInfos.Where(x => x.Username == username);

            string jsonString = JsonSerializer.Serialize(ordersOfCurrentUsers);
            return jsonString;

        }


        [Authorize]
        [Route("deleteItem/{cartId}")]

        [HttpDelete]
        public async Task<ActionResult<Cart>> DeleteCartId(Guid cartId)
        {
            var cartObject = await _context.Carts.FindAsync(cartId);
            if (cartObject == null)
            {
                return NotFound();
            }

            _context.Carts.Remove(cartObject);
            await _context.SaveChangesAsync();

            return cartObject;
        }


        [Authorize]
        [Route("deleteUser/{UserId}")]

        [HttpDelete]
        public async Task<ActionResult<User>> DeleteUserId(Guid UserId)
        {
            var userObject = await _context.Users.FindAsync(UserId);
            if (userObject == null)
            {
                return NotFound();
            }

            _context.Users.Remove(userObject);
            await _context.SaveChangesAsync();

            return userObject;
        }



        [HttpGet("cart/{username}")] // Set the attribute to Read
       

        [Authorize]
        public String CartStatus(string username)
        {

            var cartList = _context.Carts.Where(x => x.UserName == username);

            string jsonString = JsonSerializer.Serialize(cartList);
            return jsonString;

        }

        [HttpPost("cartpopulate")] // Set the attribute to Read
        [Authorize]
     
        public async Task<int> cartPopoulate(Cart cartData)
        {

            _context.Add(cartData);

            int response = await _context.SaveChangesAsync();
            return response;
        }



        [HttpPost("billinginfo")] // Set the attribute to Read
        [Authorize]

        public async Task<int> billingInfoSave(BillingInfo billingData)
        {

            _context.Add(billingData);
            int response = await _context.SaveChangesAsync();



            var cartList = _context.Carts.Where(x => x.UserName == billingData.Username);
          
            if (cartList != null)
            {

                foreach (var cart in cartList)
                {

                    Order order = new Order();
                    order.billingId = billingData.billingId;
                    order.ProductId = cart.ProductId;
                    order.Quantity = cart.Quantity;
                    order.UserName = cart.UserName;




                    _context.Add(order);
                    response = await _context.SaveChangesAsync();


                        }
            }

            _context.Carts.RemoveRange(_context.Carts.Where(x => x.UserName == billingData.Username));
            _context.SaveChanges();

            return response;
        }


        [Route("/product-categories/{productId}")]

        [HttpGet] // Set the attribute to Read
        public String Product(Guid productId)
        {

            var product = _context.Products.Where(x => x.ProductId == productId);

            string jsonString = JsonSerializer.Serialize(product);
            return jsonString;

        }

    }
}
