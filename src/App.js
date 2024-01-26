import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Image } from "./containers/Image";
import hero from "./assets/home/hero-section.jpg";

import hero_reduced from "./assets/home_reduced/hero-section.jpg";
import "./App.css";
import { useCarousel } from "./hooks/useCarousel";
import { CarouselWrapper } from "./components/CarouselWrapper";
import { Home } from "./pages/Home";
import { NavbarFooter } from "./templates/NavbarFooter";

function App() {
  // const carousel
  const a = useCarousel([
    <Image simple_image={hero_reduced} HD_image={hero} alt="Trial Element" />,
    <Image simple_image={hero_reduced} HD_image={hero} alt="Trial Element" />,
  ]);
  console.log(a.currentStepIndex);
  return (
    <div className="app_container">
      {/* <Home /> */}
      {/* <CarouselWrapper>{a.page}</CarouselWrapper>
      <button onClick={a.next}>Click</button> <Image simple_image={hero_reduced} HD_image={hero} alt="Trial Element"/> */}

      <BrowserRouter>
        <Routes>
          <Route element={<NavbarFooter />}>
            <Route path="/" element={<Home/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
