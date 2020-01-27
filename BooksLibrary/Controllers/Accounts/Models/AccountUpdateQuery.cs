using Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BooksLibrary.Controllers.Accounts.Models
{
    public class AccountUpdateQuery: User
    {
        public string Password { get; set; }
    }
}
