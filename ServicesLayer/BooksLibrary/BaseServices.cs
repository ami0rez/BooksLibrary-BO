using Core.Models;
using InfrastructureLayer.DataAccess.BooksLibrary;
using System;
using System.Collections.Generic;
using System.Text;

namespace ServicesLayer.BooksLibrary
{
    public abstract class BaseServices
    {
        protected BooksDbContext _database;
        public BaseServices(BooksDbContext database)
        {
        _database = database;
        }
    }
}
