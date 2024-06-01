import React from 'react';
import { useParams } from 'react-router-dom';
import books from '../data/books.json';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import MyNavbar from './MyNavbar';
import '../css/Details.css';
import Footer from './Footer';

const Details = () => {
  const { id } = useParams();
  const book = books.find(book => book.id === parseInt(id));

  if (!book) {
    return <p>Book not found</p>;
  }

  return (
    <>
      <MyNavbar />
      <Container className="mt-4 details-container">
        <Row>
          <Col md={6}>
            <Card className="details-card">
              <Card.Img variant="top" src={book.image_link} className="card-img-top" />
            </Card>
          </Col>
          <Col md={6}>
            <h2 className="card-title">{book.title}</h2>
            <h4 className="card-subtitle">by {book.author}</h4>
            <p className="card-description">{book.description}</p>
            <p className="card-info"><strong>Category:</strong> {book.category}</p>
            <p className="card-info"><strong>Pages:</strong> {book.number_of_pages}</p>
            <p className="card-info"><strong>ISBN:</strong> {book.isbn}</p>
            <p className="card-info"><strong>Published:</strong> {book.publishing_date}</p>
            <p className="card-info"><strong>Publisher:</strong> {book.publisher}</p>
            <p className="card-info"><strong>Language:</strong> {book.language}</p>
            <p className="card-info"><strong>Rating:</strong> {book.ratings}</p>
            <p className="card-info"><strong>Price:</strong> ₹{book.price}</p>
            <Button variant="primary" className="btn-primary">Add to Cart</Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Details;
