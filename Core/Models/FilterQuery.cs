using Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Core.Models
{
    public class FilterQuery
    {
        public IList<int> Authors { get; set; }
        public IList<int> Editors { get; set; }
        public IList<int> Categories { get; set; }
        public IList<int> SubCategories { get; set; }
        public IList<int> Tags { get; set; }
        public string BookName { get; set; }

        public int? Start { get; set; }

        public int? Length { get; set; }
    }
}
