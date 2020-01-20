import React from 'react'
import HomePageView from './HomePageView';

class HomePageController extends React.Component {
    state = {
        filterOptions: {},
        selectedOptions: {},
        books: [],
    }

    setBooks = () => {
        this.setState({ books: [] });
    }

    updateBooks = (options) => {

    }

    setfiltredOptions = (options) => {
        this.setState({ selectedOptions: options })
    }
    render() {
        const { filterOptions, selectedOptions, books } = this.state;
        return (
            <HomePageView
                filterOptions={filterOptions}
                selectedOptions={selectedOptions}
                books={books}
            />
        )
    }
}
export default HomePageController