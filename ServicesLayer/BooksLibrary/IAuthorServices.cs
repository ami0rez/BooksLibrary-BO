using System.Collections.Generic;
using Core.Models;

namespace ServicesLayer.BooksLibrary
{
   public interface IAuthorServices
    {
        Author Create(Author Author);
        void Delete(int id);
        IEnumerable<Author> ReadAll();
        Author ReadOne(int id);
        void Update(Author Author);
    }
}