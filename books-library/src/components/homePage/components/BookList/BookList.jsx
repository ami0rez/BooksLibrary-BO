import React from 'react'
import PropTypes from 'prop-types';
import BookCard from './BookCard/BookCard';

import './bookList.css'
import InfiniteScroll from 'react-infinite-scroller';
import globalConstants from '../../../../business/constants/globalConstants';

const BookList = ({ books, addFilteresBooks, hasMore }) => {
  console.log(books);
  const loadMore = (page) => {
    const start = (page - 1) * globalConstants.BOOKS_LENGTH_PER_DOWNLOAD;
    addFilteresBooks(start, globalConstants.BOOKS_LENGTH_PER_DOWNLOAD);
  }
  return (

    <InfiniteScroll
      pageStart={0}
      loadMore={loadMore}
      hasMore={hasMore}
      loader={<div className="loader" key={0}>Loading ...</div>}
    ><div id="book-list">
        {
          books.map((book) => (
            <div
              key={book.id}
              className='book-item'
            >
              <BookCard
                base64Image={book.base64Image}
                title={book.name}
                url={book.url}
                id={book.id}
              />
            </div>
          ))
        }</div >
    </InfiniteScroll>

  )
}
BookList.propTypes = {
  books: PropTypes.array,
  addFilteresBooks: PropTypes.func,
}
BookList.defaultProps = {
  books: [],
  addFilteresBooks: () => { },
}
export default BookList
