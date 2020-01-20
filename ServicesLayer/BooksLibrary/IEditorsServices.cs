using System.Collections.Generic;
using Core.Models;

namespace ServicesLayer.BooksLibrary
{
   public interface IEditorsServices
    {
        Editor Create(Editor Editor);
        void Delete(int id);
        IEnumerable<Editor> ReadAll();
        Editor ReadOne(int id);
        void Update(Editor Editor);
    }
}