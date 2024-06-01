import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';
import books from '../data/books.json';
import BookFilter from './BookFilter';
import MyNavbar from './MyNavbar';
import '../css/Home.css';
import Footer from './Footer';

const Home = () => {
  const [Books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    setBooks(books);
    setFilteredBooks(books);
  }, []);

  useEffect(() => {
    filterBooks();
  }, [selectedCategory, selectedPriceRange]);

  const filterBooks = () => {
    let filtered = books;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(book => book.category === selectedCategory);
    }

    if (selectedPriceRange !== 'All') {
      const priceRange = {
        'Under ₹500': [0, 500],
        '₹500 - ₹1000': [500, 1000],
        'Over ₹1000': [1000, Infinity],
      }[selectedPriceRange];

      filtered = filtered.filter(book => book.price >= priceRange[0] && book.price <= priceRange[1]);
    }

    setFilteredBooks(filtered);
  };

  const handleSearch = (query) => {
    if (query === '') {
      setFilteredBooks(Books);
    } else {
      const filtered = Books.filter(book => book.title.toLowerCase().includes(query.toLowerCase()));
      setFilteredBooks(filtered);
    }
  };

  const categories = [...new Set(books.map(book => book.category))];
  const trendingBooks = Books.filter(book => book.trending);

  return (
    <>
      <MyNavbar handleSearch={handleSearch} />
      <Container>
        <h2 className="mt-4">Trending Books</h2>
        <Carousel>
          {trendingBooks.map(book => (
            <Carousel.Item key={book.id}>
              <img
                className="d-block w-100"
                src={book.banner_image}
                alt={book.title}
              />
              <Carousel.Caption>
                <h3>{book.title}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        
        <h2 className="mt-4">All Books</h2>
        <div>
          <button className="show-filters-btn" onClick={() => setShowFilters(!showFilters)}>
            {showFilters ? 'Close Filters' : 'Show Filters'}
          </button>
          {showFilters && (
            <BookFilter
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedPriceRange={selectedPriceRange}
              setSelectedPriceRange={setSelectedPriceRange}
            />
          )}
        </div>

        <Row>
          {filteredBooks.map(book => (
            <Col key={book.id} sm={12} md={6} lg={4} className="mb-4">
              <Link to={`/books/${book.id}`} className="book-link">
                <Card className="h-100">
                  <Card.Img variant="top" src={book.image_link} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">by {book.author}</Card.Subtitle>
                    <Card.Text><strong>Category:</strong> {book.category}</Card.Text>
                    <Card.Text><strong>Price:</strong> ₹{book.price}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
