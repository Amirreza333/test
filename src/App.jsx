import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Body from "./components/Body/Body";
import Card from "./components/Card/Card";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import Card2 from "./components/Card with picture/Card2";
import Comments from "./components/Comment Section/Comments";
import Question from "./components/soal section/Question";
import Contact from "./components/ContactSection/ContactSection";

import Footer from "./components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import ServiceConstruction from "./components/pages/Service/ServiceConstruction";
import InteriorDesign from "./components/pages/Service/interior-design/InteriorDesign";
import Consulting from "./components/pages/Service/moshavere/Consulting";
import IcePenhouse from "./components/pages/Service/AspenHeights/AspenHeights"; // حرف بزرگ


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <>
              <Body />
              <Card />
              <WhyChooseUs />
              <ProjectsSection />
              <Card2 />
              <Comments />
              <Question />
              <Contact />
            </>
          }
        />
        <Route path="/ServiceConstruction" element={<ServiceConstruction />} />
        <Route path="/InteriorDesign" element={<InteriorDesign />} />
        <Route path="/consulting" element={<Consulting />} />
        <Route path="/IcePenhouse" element={<IcePenhouse />} />

      </Route>
    </Routes>
  );
}

export default App;
