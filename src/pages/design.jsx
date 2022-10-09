import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "../components/header";

const Design = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const next = () => {
    console.log(currentIndex);
    if (currentIndex < 2) {
      setCurrentIndex((prevState) => prevState + 1);
    }
    if (currentIndex >= 2) {
      setCurrentIndex(0);
    }
  };
  const prev = () => {
    console.log(currentIndex);
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
            <Link to="/booklet">
              <img
                className="mySlides"
                src="/images/americanpsycho.jpg"
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
                <span className="folder-title">Design</span>
                <span className="folder-separator">&nbsp;/&nbsp;</span>
                <span className="collection-title">Booklet</span>
              </Link>
            </div>
            <Link to="/experiment">
              <img
                className="mySlides"
                src="/images/wonderbridge.jpg"
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
                <span className="folder-title">Design</span>
                <span className="folder-separator">&nbsp;/&nbsp;</span>
                <span className="collection-title">Graphic</span>
              </Link>
            </div>
            <Link to="/documentary">
              <img
                className="mySlides"
                src="/images/gamewheel.jpg"
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
                <span className="folder-title">Design</span>
                <span className="folder-separator">&nbsp;/&nbsp;</span>
                <span className="collection-title">Interactive</span>
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

export default Design;
