import React from 'react'
import Filter from './components/Filter/Filter';
import CardsList from './UI/CardsList';

const HomePage = () => {
    return (
        <div>
            <Filter
            />
            <CardsList
            />
        </div>
    )
}
HomePage.defaultProps = {
    filterOptions: {},
    books: [],
    onFilterChange: () => { },
}
export default HomePage;
