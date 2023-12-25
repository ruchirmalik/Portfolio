import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Cursor from "./components/Cursor/cursor";
import Skills from "./components/Skills/skills";
import TechStack from "./components/Techstack/techstack";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Intro/>
        {/* <Cursor/> */}
        <Skills/>
        <TechStack/>
        <Contact/>
    </div>
  );
}

export default App;
