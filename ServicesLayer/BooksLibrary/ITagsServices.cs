using System.Collections.Generic;
using Core.Models;

namespace ServicesLayer.BooksLibrary
{
    public interface ITagsServices
    {
        Tag Create(Tag tag);
        void Delete(int id);
        IEnumerable<Tag> ReadAll();
        Tag ReadOne(int id);
        void Update(Tag tag);
    }
}