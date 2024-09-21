import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import SideBar from "./components/SideBar/SideBar";
import Skills from "./components/Skills/Skills";
import TopNavBar from "./components/TopNavBar/TopNavBar";
import Services from "./components/Services/Services"
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div >
      <TopNavBar/>
      <SideBar/>
      <Hero/>
      <About/>
      <Skills/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
