import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "../components/header";

const Filmography = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const next = () => {
    if (currentIndex < 2) {
      setCurrentIndex((prevState) => prevState + 1);
    }
    if (currentIndex >= 2) {
      setCurrentIndex(0);
    }
  };
  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
    if (currentIndex <= 0) {
      setCurrentIndex(2);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      next();
    }, 3000);
    return () => clearTimeout(timer);
  });

  return (
    <>
      <div style={{ margin: 0, height: "100%", overflow: "hidden" }}>
        <div className="canvas" style={{ margin: 0, height: "100%" }}>
          <Header />
          <div className="slideshow">
            <Link to="/narrative">
              <img
                className="mySlides"
                src="/images/fort_irwin_cover.jpg"
                id="slideImg"
                alt="fortIrwin"
                style={currentIndex === 0 ? { opacity: 1 } : { opacity: 0 }}
              />
            </Link>
            <div
              className="collection-detail-wrapper mySlideTitles"
              style={
                currentIndex === 0
                  ? { visibility: "visible" }
                  : { visibility: "hidden" }
              }
            >
              <Link to="/narrative">
                <span className="folder-title">FILMOGRAPHY</span>
                <span className="folder-separator">&nbsp;/&nbsp;</span>
                <span className="collection-title">Narrative Short</span>
              </Link>
            </div>

            <Link to="/experiment">
              <img
                className="mySlides"
                src="/images/ec_cover.jpg"
                id="slideImg"
                alt="ecCover"
                style={currentIndex === 1 ? { opacity: 1 } : { opacity: 0 }}
              />
            </Link>
            <div
              className="collection-detail-wrapper mySlideTitles"
              style={
                currentIndex === 1
                  ? { visibility: "visible" }
                  : { visibility: "hidden" }
              }
            >
              <Link to="/experiment">
                <span className="folder-title">FILMOGRAPHY</span>
                <span className="folder-separator">&nbsp;/&nbsp;</span>
                <span className="collection-title">Experimental Cinema</span>
              </Link>
            </div>
            <Link to="/documentary">
              <img
                className="mySlides"
                src="/images/slide_fwe.png"
                id="slideImg"
                alt="fwe"
                style={currentIndex === 2 ? { opacity: 1 } : { opacity: 0 }}
              />
            </Link>
            <div
              className="collection-detail-wrapper mySlideTitles"
              style={
                currentIndex === 2
                  ? { visibility: "visible" }
                  : { visibility: "hidden" }
              }
            >
              <Link to="/documentary">
                <span className="folder-title">FILMOGRAPHY</span>
                <span className="folder-separator">&nbsp;/&nbsp;</span>
                <span className="collection-title">Documentary</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div onClick={prev} className="prev pointer cover-slideshow">
        &lt;
      </div>
      <div onClick={next} className="next pointer cover-slideshow">
        &gt;
      </div>
    </>
  );
};

export default Filmography;
