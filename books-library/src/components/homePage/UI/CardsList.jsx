import React from 'react'
import SimpleCard from './SimpleCard'

const CardsList = ({ books }) => {
    return (
        <div>
            {
                books.map((book) => (
                    <SimpleCard
                        key={book.id}
                        imageUrl={book.imageUrl}
                        title={book.title}
                        url={book.url}
                    />
                ))
            }
        </div>
    )
}
CardsList.defaultProps = {
    books: [],
}
export default CardsList
