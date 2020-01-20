using Core.Models;
using InfrastructureLayer.DataAccess.BooksLibrary;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ServicesLayer.BooksLibrary
{
    public class RessourcesServices : BaseServices, IRessourcesServices
    {
        public RessourcesServices(BooksDbContext database) : base(database)
        {

        }

        public Ressource ReadOne(int id)
        {
            return _database.Ressources.SingleOrDefault(t => t.Id == id);
        }

        public IEnumerable<Ressource> ReadAll()
        {
            return _database.Ressources.ToList();
        }

        public Ressource Create(Ressource Ressource)
        {
            _database.Ressources.Add(Ressource);
            _database.SaveChanges();
            return Ressource;
        }

        public void Update(Ressource Ressource)
        {
            var result = _database.Ressources.SingleOrDefault((oldRessource) => oldRessource.Id == Ressource.Id);
            if (result != null)
            {
                _database.Entry(result).CurrentValues.SetValues(Ressource);
                _database.SaveChanges();
            }
        }

        public void Delete(int id)
        {
            var Ressource = new Ressource { Id = id };
            _database.Ressources.Attach(Ressource);
            var deleted = _database.Ressources.Remove(Ressource);
            _database.SaveChanges();
        }
    }
}
