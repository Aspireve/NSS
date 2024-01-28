import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Image } from "./containers/Image";
// import hero from "./assets/home/hero-section.jpg";

// import hero_reduced from "./assets/home_reduced/hero-section.jpg";
import "./App.css";
// import { useCarousel } from "./hooks/useCarousel";
import { CarouselWrapper } from "./components/CarouselWrapper";
import { Home } from "./pages/Home";
import { NavbarFooter } from "./templates/NavbarFooter";
import Testimonial from "./pages/Testimonials";
import Team from "./pages/Team";
import { NavbarOnly } from "./templates/Navbar";
import Projects from "./pages/Projects";
import About from "./pages/About";

function App() {
  // const carousel
  // const a = useCarousel([
  //   <Image simple_image={hero_reduced} HD_image={hero} alt="Trial Element" />,
  //   <Image simple_image={hero_reduced} HD_image={hero} alt="Trial Element" />,
  // ]);
  // console.log(a.currentStepIndex);
  return (
    <div className="app_container">
      {/* <Home /> */}
      {/* <CarouselWrapper>{a.page}</CarouselWrapper>
      <button onClick={a.next}>Click</button> <Image simple_image={hero_reduced} HD_image={hero} alt="Trial Element"/> */}

      <BrowserRouter>
        <Routes>
          <Route element={<NavbarFooter phase={3}/>}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
          <Route element={<NavbarFooter phase={1}/>}>
            <Route path="/testimonials" element={<Testimonial />} />
            <Route path="/team" element={<Team />} />
          </Route>
          <Route element={<NavbarOnly phase={3}/>}>
            <Route path="/projects" element={<Projects />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
