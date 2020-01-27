using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ServicesLayer.BooksLibrary;
using BooksLibrary.Controllers.Accounts.Models;
using System.Linq;
using System.Security.Claims;

namespace BooksLibrary.Controllers.Accounts
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class AccountsController : ControllerBase
    {
        private IUserService _userService;
        public AccountsController(IUserService userServices)
        {
            _userService = userServices;
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public IActionResult Authenticate([FromBody]AccountQuery userParam)
        {
            var user = _userService.Authenticate(userParam.Email, userParam.Password);

            if (user == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            return Ok(user);
        }
        [HttpPut("profile")]
        public IActionResult UpdateProfile([FromBody]AccountUpdateQuery query)
        {
            var accessToken = User.Identities.First().Claims;
            var id = accessToken.SingleOrDefault(c => c.Type == ClaimTypes.Name).Value;
            var account = new Core.Models.Identification.Account
            {
                Address = query.Address,
                Email = query.Email,
                FirstName = query.FirstName,
                Id = int.Parse(id),
                LastName = query.LastName,
                Password = query.Password,
                PhoneNumber = query.Password,
            };
            var accountx = _userService.Update(account);
            return Ok(accountx);
        }

        [HttpGet("profile")]
        public IActionResult GetProfile()
        {
            var accessToken = User.Identities.First().Claims;
            var id = accessToken.SingleOrDefault(c => c.Type == ClaimTypes.Name).Value;
            var profileData = _userService.GetProfile(int.Parse(id));
            var response = new AccountResponse
            {
                Id = profileData.Id,
                Address = profileData.Address,
                Email = profileData.Email,
                FirstName = profileData.FirstName,
                LastName = profileData.LastName,
                PhoneNumber = profileData.PhoneNumber
            };
            return Ok(response);
        }
    }
}
