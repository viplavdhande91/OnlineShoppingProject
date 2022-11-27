//using Microsoft.AspNetCore.Mvc;
//using Microsoft.IdentityModel.Tokens;
//using Webapi.Repository;

//namespace Webapi.Controllers
//{

//    [ApiController]
//    [Route("[controller]")]
//    public class AuthController : Controller
//    {
//        public IActionResult Index()
//        {
//            return View();
//        }

//        private readonly IUserRepository userRepository;
//        private readonly ITokenHandler tokenHandler;

//        public AuthController(IUserRepository userRepository, ITokenHandler tokenHandler)
//        {
//            this.userRepository = userRepository;
//            this.tokenHandler = tokenHandler;
//        }

//        [HttpPost]
//        [Route("login")]
//        public async Task<IActionResult> LoginAsync(Models.DTO.LoginRequest loginRequest)
//        {
//            // Check if user is authenticated
//            // Check username and password
//            var user = await userRepository.AuthenticateAsync(loginRequest.Email, loginRequest.Password);

//            if (user != null)
//            {
//                // Generate a JWT Token
//                var token = await tokenHandler.CreateTokenAsync(user);
//                return Ok(token);
//            }

//            return BadRequest("Username or Password is incorrect.");
//        }
//    }
//}
