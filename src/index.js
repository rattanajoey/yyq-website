import "./index.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./pages/splash";
import Home from "./pages/home";
import Filmography from "./pages/filmography";
import Design from "./pages/design";
import Photography from "./pages/photography";
import Blog from "./pages/blog";
import Narrative from "./pages/film/narrative";
import Experiment from "./pages/film/experiment";
import Documentary from "./pages/film/documentary";
import Booklet from "./pages/design/booklet";
import Graphic from "./pages/design/graphic";
import Interactive from "./pages/design/interactive";
import Goldfish from "./pages/photography/goldfish";
import Souvenirs from "./pages/photography/souvenirs";
import OnTheRoad from "./pages/photography/onetheroad";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="home" element={<Home />} />
        <Route path="filmography" element={<Filmography />} />
        <Route path="design" element={<Design />} />
        <Route path="photography" element={<Photography />} />
        <Route path="blog" element={<Blog />} />
        <Route path="narrative" element={<Narrative />} />
        <Route path="experiment" element={<Experiment />} />
        <Route path="documentary" element={<Documentary />} />
        <Route path="booklet" element={<Booklet />} />
        <Route path="graphic" element={<Graphic />} />
        <Route path="interactive" element={<Interactive />} />
        <Route path="goldfish" element={<Goldfish />} />
        <Route path="souvenirs" element={<Souvenirs />} />
        <Route path="ontheroad" element={<OnTheRoad />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
