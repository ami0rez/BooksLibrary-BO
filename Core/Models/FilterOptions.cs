using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Models
{
    public class FilterOptions
    {
        public IList<Author> Authors { get; set; }
        public IList<Editor> Editors { get; set; }
        public IList<Category> Categories { get; set; }
        public IList<SubCategory> SubCategories { get; set; }
        public IList<Tag> Tags { get; set; }
    }
}
