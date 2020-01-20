using System.Collections.Generic;
using System.Threading.Tasks;
using Core.Models;

namespace ServicesLayer.BooksLibrary
{
    public interface ISubCategoryServices
    {
        SubCategory Create(SubCategory SubCategory);
        void Delete(int id);
        Task<IEnumerable<SubCategory>> ReadAll();
        SubCategory ReadOne(int id);
        void Update(SubCategory SubCategory);
    }
}