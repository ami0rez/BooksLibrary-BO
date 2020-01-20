using System.Collections.Generic;
using Core.Models;

namespace ServicesLayer.BooksLibrary
{
    public interface ICommentServices
    {
        Comment Create(Comment Comment);
        void Delete(int id);
        IEnumerable<Comment> ReadAll();
        Comment ReadOne(int id);
        void Update(Comment Comment);
    }
}