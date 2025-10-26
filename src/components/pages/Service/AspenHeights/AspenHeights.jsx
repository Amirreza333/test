import React from "react";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import Card from "../../../ProjectsSection/ProjectsSection"; 
import "./AspenHeights.module.css"; 

const AspenHeights = () => {
  return (
    <>
      <section className="aspen-hero">
        <Container fluid className="text-center text-white d-flex align-items-center justify-content-center">
          <div>
            <h1 className="display-4 fw-bold">آسپن هایتس</h1>
            <p className="lead">پروژه‌ای منحصر به فرد با طراحی داخلی لوکس</p>
            <Button variant="primary" size="lg" href="#contact">
              رزرو بازدید
            </Button>
          </div>
        </Container>
      </section>

      <section className="features py-5">
        <Container>
          <h2 className="text-center mb-5">ویژگی‌های آسپن هایتس</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card title="مساحت ۴۵۰ متر" description="فضای لوکس برای زندگی مدرن." />
            </Col>
            <Col md={4} className="mb-4">
              <Card title="باغ خصوصی" description="فضای سبز اختصاصی با منظره زیبا." />
            </Col>
            <Col md={4} className="mb-4">
              <Card title="قیمت از ۱۸ میلیارد" description="پرداخت با شرایط ویژه." />
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
                src="/Picture/beautiful-buildings-1.webp" // اصلاح نام فایل
                alt="داخل آسپن هایتس"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://via.placeholder.com/800x500?text=Aspen+View"
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

export default AspenHeights;