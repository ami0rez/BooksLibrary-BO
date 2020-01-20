using Core.Enums;
namespace Core.Models.Identification
{
    public class Account:User
    {
        public string Password { get; set; }

        public string Token { get; set; }

        public UserRole Role { get; set; }
    }
}
