using Core.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Queries
{
    public class BookResponse
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string ImageLocation { get; set; }

        public IList<Author> Authors { get; set; }

        public Editor Editor { get; set; }

        public IList<Tag> Tags { get; set; }

        public IList<Comment> Comment { get; set; }

        public Ressource Ressource { get; set; }

        public IList<SubCategory> SubCategories { get; set; }

    }
}
