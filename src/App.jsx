import Body from "./components/Body/Body";
import Header from "./components/header/Header";
import Card from "./components/Card/Card";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import Card2 from "./components/Card with picture/Card2";
import Comments from "./components/Comment Section/Comments";
import Question from "./components/soal section/Question";
import Contact from "./components/ContactSection/ContactSection";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
