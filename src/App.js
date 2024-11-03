import About from "./components/About/About";
import Certifications from "./components/Certifications/Certifications";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";


function App() {
  return (
    <div>
     <Navbar/>
     <About/>
     <Education/>
     <Skills/>
     <Projects/>
     <Certifications/>
     <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
