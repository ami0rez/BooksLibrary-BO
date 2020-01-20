using Core.Models;
using InfrastructureLayer.DataAccess.BooksLibrary;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ServicesLayer.BooksLibrary
{
    public class AuthorServices : BaseServices, IAuthorServices
    {
        public AuthorServices(BooksDbContext database) : base(database)
        {

        }

        public Author ReadOne(int id)
        {
            return _database.Authors.SingleOrDefault(t => t.Id == id);
        }

        public IEnumerable<Author> ReadAll()
        {
            return _database.Authors.ToList();
        }

        public Author Create(Author Author)
        {
            _database.Authors.Add(Author);
            _database.SaveChanges();
            return Author;
        }

        public void Update(Author Author)
        {
            var result = _database.Authors.SingleOrDefault((oldAuthor) => oldAuthor.Id == Author.Id);
            if (result != null)
            {
                _database.Entry(result).CurrentValues.SetValues(Author);
                _database.SaveChanges();
            }
        }

        public void Delete(int id)
        {
            var Author = new Author { Id = id };
            _database.Authors.Attach(Author);
            var deleted = _database.Authors.Remove(Author);
            _database.SaveChanges();
        }
    }
}
