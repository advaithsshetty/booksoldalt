import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MyNavbar from './MyNavbar';
import Footer from './Footer';
import '../css/About.css';

const About = () => {
  return (
    <>
      <MyNavbar />
      <Container className="about-us">
        <h1>About BOOKSoLD</h1>
        <Row>
          <Col md={6}>
            <h2>Our Story</h2>
            <p>
              BOOKSoLD was founded with a mission to bring the best selection of books to readers around the world.
              We believe in the power of literature to inspire, educate, and entertain. Our curated selection of books spans various genres,
              catering to all kinds of readers.
            </p>
          </Col>
          <Col md={6}>
            <img src="https://via.placeholder.com/500x200" alt="Our Story" className="img-fluid" />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <img src="https://via.placeholder.com/500x200" alt="Our Mission" className="img-fluid" />
          </Col>
          <Col md={6}>
            <h2>Our Mission</h2>
            <p>
              At BOOKSoLD, our mission is to create a vibrant community of book lovers. We are dedicated to providing
              excellent customer service, a wide variety of books, and a seamless shopping experience. Whether you're
              looking for the latest bestsellers or timeless classics, BOOKSoLD is your one-stop shop for all your
              literary needs.
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default About;