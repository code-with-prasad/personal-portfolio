import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Education from "./component/Education";
import Skils from "./component/Skils";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import { useEffect } from "react";

// animation import 
import Aos from 'aos';
import "aos/dist/aos.css";

function App() {
  useEffect(()=>{
    Aos.init();
  })
  return (
    <div className="App">
      <>
      <Navbar/>
      <div className="container">
        <Home/>
        <Education/>
        <Skils/>
        <Projects/>
        <Contact/>
      </div>
      </>
    </div>
  );
}

export default App;
