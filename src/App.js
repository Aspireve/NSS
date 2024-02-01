import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Image } from "./containers/Image";
import { useState } from "react";
// import hero from "./assets/home/hero-section.jpg";

// import hero_reduced from "./assets/home_reduced/hero-section.jpg";
import "./App.css";
import { Home } from "./pages/Home";
import { NavbarFooter } from "./templates/NavbarFooter";
import Testimonial from "./pages/Testimonials";
import Team from "./pages/Team";
import { NavbarOnly } from "./templates/Navbar";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Developers from "./pages/Developers";

function App() {
  const [loader, setLoader] = useState(true)
  return (
    <div className="app_container">
      <BrowserRouter>
        <Routes>
          <Route element={<NavbarFooter phase={3} setLoader={setLoader} loader={loader}/>}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route element={<NavbarFooter phase={1} setLoader={setLoader} loader={loader}/>}>
            <Route path="/developers" element={<Developers />} />
            <Route path="/team" element={<Team />} />
          </Route>
          <Route element={<NavbarOnly phase={3} setLoader={setLoader} loader={loader}/>}>
            <Route path="/projects" element={<Projects />} />
          </Route>
          <Route element={<NavbarOnly phase={1} setLoader={setLoader} loader={loader}/>}>
            <Route path="/testimonials" element={<Testimonial />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
