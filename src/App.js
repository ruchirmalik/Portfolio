import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Cursor from "./components/Cursor/cursor";
import Skills from "./components/Skills/skills";
import TechStack from "./components/Techstack/techstack";
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (

    <div className="App">
      <Navbar />
      <Intro />
      {/* <Cursor/> */}
      <Skills />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </div>

  );
}

export default App;
