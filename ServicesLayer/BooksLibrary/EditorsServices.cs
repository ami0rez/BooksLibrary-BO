using Core.Helpers;
using Core.Models;
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
    public class EditorsServices : BaseServices, IEditorsServices
    {
        private readonly AppSettings _appSettings;
        public EditorsServices(BooksDbContext database, IOptions<AppSettings> appSettings) : base(database)
        {
            _appSettings = appSettings.Value;
        }

        public Editor ReadOne(int id)
        {
            var c = _database.Accounts.SingleOrDefault(t => t.Id == id);
            return new Editor
            {
                Id = c.Id,
                Address = c.Address,
                Email = c.Email,
                FirstName = c.FirstName,
                LastName = c.LastName,
                PhoneNumber = c.PhoneNumber,
            };
        }

        public IEnumerable<Editor> ReadAll()
        {
            return _database.Accounts.Where(a => a.Role == Core.Enums.UserRole.Editor)
                .Select(
                c => new Editor
                {
                    Id = c.Id,
                    Address = c.Address,
                    Email = c.Email,
                    FirstName = c.FirstName,
                    LastName = c.LastName,
                    PhoneNumber = c.PhoneNumber,
                }
                )
                .ToList();
        }

        public Editor Create(Editor Editor)
        {
            var a = new Core.Models.Identification.Account
            {
                Id = Editor.Id,
                Address = Editor.Address,
                Email = Editor.Email,
                FirstName = Editor.FirstName,
                LastName = Editor.LastName,
                PhoneNumber = Editor.PhoneNumber,
            };
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            a.Password = "password0";
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, a.Id.ToString()),
                    new Claim(ClaimTypes.Role, a.Role.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            a.Token = tokenHandler.WriteToken(token);
            _database.Accounts.Add(a);
            _database.SaveChanges();
            return Editor;
        }

        public void Update(Editor Editor)
        {
            var result = _database.Accounts.SingleOrDefault((oldEditor) => oldEditor.Id == Editor.Id);
            if (result != null)
            {
                _database.Entry(result).CurrentValues.SetValues(Editor);
                _database.SaveChanges();
            }
        }

        public void Delete(int id)
        {
            var Account = new Core.Models.Identification.Account { Id = id };
            _database.Accounts.Attach(Account);
            var deleted = _database.Accounts.Remove(Account);
            _database.SaveChanges();
        }
    }
}
