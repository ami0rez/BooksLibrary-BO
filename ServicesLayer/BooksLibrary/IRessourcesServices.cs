using System.Collections.Generic;
using Core.Models;

namespace ServicesLayer.BooksLibrary
{
    public interface IRessourcesServices
    {
        Ressource Create(Ressource Ressource);
        void Delete(int id);
        IEnumerable<Ressource> ReadAll();
        Ressource ReadOne(int id);
        void Update(Ressource Ressource);
    }
}