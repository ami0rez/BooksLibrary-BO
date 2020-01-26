using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Core.Models
{
    public class Book
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string BookImage { get; set; }

        [Required]
        public IList<BookAuthors> AuthorLinks { get; set; }

        [Required]
        public Editor Editor { get; set; }

        [Required]
        public IList<BookTag> TagLinks { get; set; }

        [Required]
        public IList<Comment> Comment { get; set; }

        [Required]
        public Ressource Ressource { get; set; }

        [Required]
        public IList<BookSubCategies> SubCategoriesLink { get; set; }
    }
}
