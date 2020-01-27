using Core.Exceptions;
using Core.Helpers;
using Core.Models;
using Core.Models.Identification;
using InfrastructureLayer.DataAccess.BooksLibrary;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;

namespace ServicesLayer.BooksLibrary
{
    public class UserServices : BaseServices, IUserService
    {
        private readonly AppSettings _appSettings;
        public UserServices(BooksDbContext database, IOptions<AppSettings> appSettings) : base(database)
        {
            _appSettings = appSettings.Value;
        }
        public Account Authenticate(string email, string password)
        {
            var user = _database.Accounts.SingleOrDefault(x => x.Email == email && x.Password == password);

            // return null if user not found
            if (user == null)
            {
                return null;
            }

            // authentication successful so generate jwt token
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Id.ToString()),
                    new Claim(ClaimTypes.Role, user.Role.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            user.Token = tokenHandler.WriteToken(token);
            _database.SaveChanges();

            // remove password before returning
            user.Password = null;

            return user;
        }
        public Account Update(Account user)
        {
            var _user = _database.Accounts.SingleOrDefault(x => x.Email == user.Email && x.Id != user.Id);

            // return null if user not found
            if (_user != null)
            {
                throw new RecordAlreadyExistsException("Emial Already Exists");
            }
            var account = _database.Accounts.SingleOrDefault(c => c.Id == user.Id);
            if(account == null)
            {
                throw new RecordNotFoundException("User nout fpund");
            }

            account.FirstName = user.FirstName;
            account.LastName = user.FirstName;
            account.Address = user.Address;
            account.Email = user.Email;
            account.Password = user.Password;
            account.PhoneNumber = user.PhoneNumber;
            _database.SaveChanges();
            return account;
        }
        public Account GetProfile(int id)
        {
            return _database.Accounts.SingleOrDefault(ac => ac.Id == id);
        }
    }
}
