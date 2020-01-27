using Core.Models;
using Core.Models.Identification;
using System;
using System.Collections.Generic;
using System.Text;

namespace ServicesLayer.BooksLibrary
{
    public interface IUserService
    {
        Account Authenticate(string username, string password);
        Account GetProfile(int id);
        Account Update(Account account);
    }
}
