import React from 'react'
import FilterContainer from './components/Filter/FilterContainer';
import BookListContainer from './components/BookList/BookCard/BookListContainer';

const HomePage = () => {
    return (
        <div>
            <FilterContainer
            />
            <BookListContainer />
        </div>
    )
}
HomePage.defaultProps = {
    filterOptions: {},
    books: [],
    onFilterChange: () => { },
}
export default HomePage;
