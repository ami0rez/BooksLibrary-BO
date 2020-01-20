using System.Collections.Generic;
using Core.Models;
using Core.Queries;

namespace ServicesLayer.BooksLibrary
{
    public interface IBooksServices : IFilterable<FilterOptions, FilterQuery, BookResponse>
    {
        Book Create(CreateBookQuery query);
        void Delete(int id);
        IEnumerable<Book> ReadAll();
        Book ReadOne(int id);
        void Update(Book Book);
    }
}