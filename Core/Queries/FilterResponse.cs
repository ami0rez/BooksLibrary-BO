using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Queries
{
    public class FilterResponse
    {
        public IList<FilterItem> Authors { get; set; }
        public IList<FilterItem> Editors { get; set; }
        public IList<FilterItem> Categories { get; set; }
        public IList<FilterItem> SubCategories { get; set; }
        public IList<FilterItem> Tags { get; set; }
    }

    public class FilterItem
    {
        public int? Id { get; set; }

        public string Name { get; set; }
    }
}
