import React, { useState } from 'react'
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Assets from '../../../../../business/constants/Assets';

const BookCard = ({ base64Image, title, url, id }) => {
  const [bookImage, setBookImage] = useState(base64Image)
  const handleClick = () => {
    window.location.href = `/books/${id}`;
  }
  return (
    <div id="book-card">
      <Card className="book-card-card">
        <Card.Img
          className="card-image"
          variant="top"
          src={bookImage}
          onError={() => setBookImage(Assets.BookDefaulmage)}
        />
        <Card.Footer
          className="card-footer"
        >
          <Card.Title
            className="card-footer-title"
          >
            {title}
          </Card.Title>
          <Card.Img
            id="card-footer-image"
            variant="top"
            onClick={handleClick}
            src={Assets.DownloadIcon}
          />
        </Card.Footer>
      </Card>
    </div>
  )
}
BookCard.propTypes = {
  base64Image: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
}
BookCard.defaultProps = {
  base64Image: "",
  title: "",
  url: "",
}
export default BookCard
