using System;
using System.Collections.Generic;
using System.Text;

namespace ServicesLayer.BooksLibrary
{
    public interface IFilterable<Filters, FilterQuery, Result>
    {
        Filters GetFilters(FilterQuery query);
        IEnumerable<Result> FilterBy(FilterQuery query);
    }
}
