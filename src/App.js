import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
import image from "./assets/solar.jpg";

function App() {
  return (
    <div className="back">
      <img src={image} alt="" className="back-img" />
      <Header />
      <Hero />
      <h2 className="projects spaceX">Education&nbsp;</h2>
      <Education />
      <h2 className="projects spaceX">SKILLS&nbsp;</h2>
      <Skills />
      <h2 className="projects spaceX">PROJECTS&nbsp;</h2>
      <Projects />
      <h2 className="projects spaceX">CONTACT ME&nbsp;</h2>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
