import Navbar from "./components/navbar/Navbar";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/section-hero/Hero";
import Projects from "./components/projects/Projects";
import MySkills from "./components/skills/MySkills"
import ContactMe from "./components/contact/ContactMe"
import Footer from "./components/footer/Footer";



function App() {
  return (
    <div className="App">
    <BrowserRouter>
    
      <Navbar />
      
      <Routes>

          <Route exact path="/" element={<Hero />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/skills" element={<MySkills />} />
          <Route exact path="/contact" element={<ContactMe />} />

         {/* <Route path="/" element={<Hero />}>
         </Route>
         <Route path="/projects" element={<Projects />}>
         </Route>
         <Route path="/skills" element={<MySkills />}>
         </Route>
         <Route path="/contact" element={<ContactMe />}>
         </Route> */}

         <Route path="*" element={<div>404 not found</div>}>
         </Route>
         
        
      </Routes>
      
    <Footer />
      

   
    </BrowserRouter>
    
      
        
        </div>
    
  );
}

export default App;
