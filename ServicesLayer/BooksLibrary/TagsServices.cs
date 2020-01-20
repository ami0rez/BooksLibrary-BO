using Core.Models;
using InfrastructureLayer.DataAccess.BooksLibrary;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ServicesLayer.BooksLibrary
{
    public class TagsServices : BaseServices, ITagsServices
    {
        public TagsServices(BooksDbContext database): base(database)
        {

        }

        public Tag ReadOne(int id)
        {
            return _database.Tags.SingleOrDefault(t => t.Id == id);
        }

        public IEnumerable<Tag> ReadAll()
        {
            return _database.Tags.ToList();
        }

        public Tag Create(Tag tag)
        {
            _database.Tags.Add(tag);
            _database.SaveChanges();
            return tag;
        }

        public void Update(Tag tag)
        {
            var result = _database.Tags.SingleOrDefault((oldTag) => oldTag.Id == tag.Id);
            if (result != null)
            {
                _database.Entry(result).CurrentValues.SetValues(tag);
                _database.SaveChanges();
            }
        }

        public void Delete(int id)
        {
            var tag = new Tag { Id = id };
            _database.Tags.Attach(tag);
            var deleted = _database.Tags.Remove(tag);
            _database.SaveChanges();
        }
    }
}
