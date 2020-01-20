import React from 'react'
import Filter from './UI/Filter'
import CardsList from './UI/CardsList'

const HomePageView = ({ filterOptions, books, onFilterChange }) => {
    return (
        <div>
            <Filter
                options={filterOptions}
                onChange={(e) => onFilterChange(e)}
            />
            <CardsList
                books={books}
            />
        </div>
    )
}
HomePageView.defaultProps = {
    filterOptions: {},
    books: [],
    onFilterChange: () => { },
}
export default HomePageView;
