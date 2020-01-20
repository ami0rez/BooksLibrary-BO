using Core.Models;
using InfrastructureLayer.DataAccess.BooksLibrary;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ServicesLayer.BooksLibrary
{
    public class CommentServices : BaseServices, ICommentServices
    {
        public CommentServices(BooksDbContext database) : base(database)
        {

        }

        public Comment ReadOne(int id)
        {
            return _database.Comments.SingleOrDefault(t => t.Id == id);
        }

        public IEnumerable<Comment> ReadAll()
        {
            return _database.Comments.ToList();
        }

        public Comment Create(Comment Comment)
        {
            _database.Comments.Add(Comment);
            _database.SaveChanges();
            return Comment;
        }

        public void Update(Comment Comment)
        {
            var result = _database.Comments.SingleOrDefault((oldComment) => oldComment.Id == Comment.Id);
            if (result != null)
            {
                _database.Entry(result).CurrentValues.SetValues(Comment);
                _database.SaveChanges();
            }
        }

        public void Delete(int id)
        {
            var Comment = new Comment { Id = id };
            _database.Comments.Attach(Comment);
            var deleted = _database.Comments.Remove(Comment);
            _database.SaveChanges();
        }
    }
}
