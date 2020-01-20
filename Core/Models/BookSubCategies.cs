using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Models
{
    public class BookSubCategies
    {
        public int Id { get; set; }
        public int BookId { get; set; }

        public Book Book { get; set; }

        public int SubCategoryId { get; set; }

        public SubCategory SubCategory { get; set; }
    }
}
