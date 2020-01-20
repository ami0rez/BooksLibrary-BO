using System.Collections.Generic;
using Core.Models;

namespace ServicesLayer.BooksLibrary
{
    public interface ICategoryServices
    {
        Category Create(Category Category);
        void Delete(int id);
        IEnumerable<Category> ReadAll();
        Category ReadOne(int id);
        void Update(Category Category);
    }
}