import React from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import Card from "../../../Card/Card";
import "../baysideResidence/baysideResidence.module.css";

const BaysideResidence = () => {
  return (
    <>
      <section className="bayside-hero">
        <Container fluid className="text-center text-white d-flex align-items-center justify-content-center">
          <div>
            <h1 className="display-4 fw-bold">اقامتگاه بایساید</h1>
            <p className="lead">اقامتگاهی لوکس در کنار ساحل</p>
            <Button variant="primary" size="lg" href="#contact">
              رزرو بازدید
            </Button>
          </div>
        </Container>
      </section>

      <section className="features py-5">
        <Container>
          <h2 className="text-center mb-5">ویژگی‌های اقامتگاه بایساید</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card
                title="مساحت ۳۰۰ متر"
                description="فضای راحت برای زندگی ساحلی."
              />
            </Col>
            <Col md={4} className="mb-4">
              <Card
                title="دسترسی به ساحل"
                description="نزدیک به دریا با منظره آرام."
              />
            </Col>
            <Col md={4} className="mb-4">
              <Card
                title="قیمت از ۱۰ میلیارد"
                description="پرداخت با شرایط ویژه."
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="gallery py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">گالری تصاویر</h2>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/Picture/beatiful buildings (1).jpg"
                alt="داخل اقامتگاه بایساید"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x500?text=Bayside+View"
                alt="منظره"
              />
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>

      <section id="contact" className="contact py-5 bg-dark text-white">
        <Container>
          <h2 className="text-center mb-5">استعلام قیمت و رزرو</h2>
          <Contact />
        </Container>
      </section>
    </>
  );
};

export default BaysideResidence;