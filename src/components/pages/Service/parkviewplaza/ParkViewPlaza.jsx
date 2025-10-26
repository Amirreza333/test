import React from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import Card from "../../../Card/Card";
import "../parkviewplaza/parkviewplaza.module.css";

const ParkViewPlaza = () => {
  return (
    <>
      {/* بنر اصلی */}
      <section className="parkview-hero">
        <Container fluid className="text-center text-white d-flex align-items-center justify-content-center">
          <div>
            <h1 className="display-4 fw-bold">پارک ویو پلازا</h1>
            <p className="lead">پروژه‌ای مدرن با چشم‌انداز شهری بی‌نظیر</p>
            <Button variant="primary" size="lg" href="#contact">
              رزرو بازدید
            </Button>
          </div>
        </Container>
      </section>

      {/* ویژگی‌ها */}
      <section className="features py-5">
        <Container>
          <h2 className="text-center mb-5">ویژگی‌های پارک ویو پلازا</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card
                title="مساحت ۳۵۰ متر"
                description="فضای جادار با طراحی مدرن."
              />
            </Col>
            <Col md={4} className="mb-4">
              <Card
                title="بالکن اختصاصی"
                description="منظره پانوراما از شهر."
              />
            </Col>
            <Col md={4} className="mb-4">
              <Card
                title="قیمت از ۱۲ میلیارد"
                description="شرایط پرداخت انعطاف‌پذیر."
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* گالری تصاویر */}
      <section className="gallery py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5">گالری تصاویر</h2>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/Picture/beatiful buildings (3).jpg"
                alt="داخل پارک ویو پلازا"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x500?text=ParkView+View"
                alt="منظره"
              />
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>

      {/* فرم تماس */}
      <section id="contact" className="contact py-5 bg-dark text-white">
        <Container>
          <h2 className="text-center mb-5">استعلام قیمت و رزرو</h2>
          <Contact />
        </Container>
      </section>
    </>
  );
};

export default ParkViewPlaza;