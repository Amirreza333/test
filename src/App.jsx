import React from "react";
import Header from "./components/header/Header";
import Body from "./components/Body/Body";
import Card from "./components/Card/Card";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import Card2 from "./components/Card with picture/Card2";
import Comments from "./components/Comment Section/Comments";
import Question from "./components/soal section/Question";
import Contact from "./components/ContactSection/ContactSection";
import Footer from "./components/footer/Footer";
import ServiceConstruction from "./components/pages/Service/ServiceConstruction"; 
import { Routes, Route } from "react-router-dom";


function App() {
  return (
<Routes>

  <Route
    path="/"
    element={
          <>
            <Header />
            <Body />
            <Card />
            <WhyChooseUs />
            <ProjectsSection />
            <Card2 />
            <Comments />
            <Question />
            <Contact />
            <Footer />
          </>
        }
      />

     
      <Route path="/ServiceConstruction" element={<ServiceConstruction />} />
    </Routes>
  );
}

export default App;
