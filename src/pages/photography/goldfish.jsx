import { useEffect, useState } from "react";
import Header from "../../components/header";

const Goldfish = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [position, setPosition] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [plusOpacity, setPlusOpacity] = useState(false);
  const next = () => {
    if (currentIndex < 5) {
      setCurrentIndex((prevState) => prevState + 1);
    }
    if (currentIndex >= 5) {
      setCurrentIndex(1);
    }
  };
  const prev = () => {
    if (currentIndex > 1) {
      setCurrentIndex((prevState) => prevState - 1);
    }
    if (currentIndex <= 1) {
      setCurrentIndex(5);
    }
  };

  const changePosition = () => {
    setPosition((currentIndex - 1) * 100);
  };

  useEffect(() => {
    changePosition();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [next, prev]);

  return (
    <div className="canvas">
      <Header />
      <div className="table-wrapper">
        <div className="slideshow-gold-fish" id="goldfish-main">
          <div
            className="slides"
            onMouseOver={() => setPlusOpacity(true)}
            onMouseOut={() => setPlusOpacity(false)}
            style={{ opacity: 1, transform: `translate(-${position}%)` }}
          >
            <img
              className="photoSlides"
              src="/images/goldfish1.jfif"
              id="slideImg"
              alt="goldfish1"
            />
            <div
              className="plus-container"
              id="change-opacity"
              onClick={() => setModalOpen(true)}
              style={
                currentIndex === 1 && plusOpacity
                  ? { opacity: 1 }
                  : { opacity: 0 }
              }
            >
              <div className="plus-resize">+</div>
            </div>
            <div className="image-description">
              <h3 style={{ marginTop: 15 }}>Gold Fish</h3>
              <p>2016, Art photography</p>
            </div>
          </div>
          <div
            className="slides"
            onMouseOver={() => setPlusOpacity(true)}
            onMouseOut={() => setPlusOpacity(false)}
            style={{ opacity: 1, transform: `translate(-${position}%)` }}
          >
            <img
              className="photoSlides"
              src="/images/goldfish2.jfif"
              id="slideImg"
              alt="goldfish2"
            />
            <div
              className="plus-container"
              id="change-opacity"
              onClick={() => setModalOpen(true)}
              style={
                currentIndex === 2 && plusOpacity
                  ? { opacity: 1 }
                  : { opacity: 0 }
              }
            >
              <div className="plus-resize">+</div>
            </div>
            <div className="image-description">
              <p style={{ whiteSpace: "normal" }}>
                Photography is about perspectives, it’s kind of a demonstration
                of how people’s perception shapes the reality. Although many
                news photographers claim their photographs represent the
                undistorted truth, in actuality, plenty of manipulations goes
                into the production and publication of a photograph.
              </p>
            </div>
          </div>
          <div
            className="slides"
            onMouseOver={() => setPlusOpacity(true)}
            onMouseOut={() => setPlusOpacity(false)}
            style={{ opacity: 1, transform: `translate(-${position}%)` }}
          >
            <img
              className="photoSlides"
              src="/images/goldfish3.jfif"
              id="slideImg"
              alt="goldfish3"
            />
            <div
              className="plus-container"
              id="change-opacity"
              onClick={() => setModalOpen(true)}
              style={
                currentIndex === 3 && plusOpacity
                  ? { opacity: 1 }
                  : { opacity: 0 }
              }
            >
              <div className="plus-resize">+</div>
            </div>
            <div className="image-description">
              <p style={{ whiteSpace: "normal" }}>
                Another type of manipulation occurs during the picture-taking
                process. In creating a photograph, the photographer chooses the
                subject matter, composes the scene, and uses filters and other
                tools to change the nature of the photograph and the subject
                itself.
              </p>
            </div>
          </div>
          <div
            className="slides"
            onMouseOver={() => setPlusOpacity(true)}
            onMouseOut={() => setPlusOpacity(false)}
            style={{ opacity: 1, transform: `translate(-${position}%)` }}
          >
            <img
              className="photoSlides"
              src="/images/goldfish4.jfif"
              id="slideImg"
              alt="goldfish4"
            />
            <div
              className="plus-container"
              id="change-opacity"
              onClick={() => setModalOpen(true)}
              style={
                currentIndex === 4 && plusOpacity
                  ? { opacity: 1 }
                  : { opacity: 0 }
              }
            >
              <div className="plus-resize">+</div>
            </div>
            <div className="image-description">
              <p style={{ whiteSpace: "normal" }}>
                Here, the goldfish is that object or the model in portrait
                photography. It’s not that important what its original identity
                is, or whether it’s dead or alive, it is intensionally put into
                different situations and containers as the photographer’s own
                preconceptions.{" "}
              </p>
            </div>
          </div>
          <div
            className="slides"
            onMouseOver={() => setPlusOpacity(true)}
            onMouseOut={() => setPlusOpacity(false)}
            style={{ opacity: 1, transform: `translate(-${position}%)` }}
          >
            <img
              className="photoSlides"
              src="/images/goldfish5.jfif"
              id="slideImg"
              alt="goldfish5"
            />
            <div
              className="plus-container"
              id="change-opacity"
              onClick={() => setModalOpen(true)}
              style={
                currentIndex === 5 && plusOpacity
                  ? { opacity: 1 }
                  : { opacity: 0 }
              }
            >
              <div className="plus-resize">+</div>
            </div>
            <div className="image-description">
              <p style={{ whiteSpace: "normal" }}>
                A photograph is shaped more by the person behind the camera than
                by what is in front of it.
              </p>
            </div>
          </div>
        </div>
        <div
          className="slideshow-gold-fish-modal"
          id="goldfish-modal"
          style={modalOpen ? { display: "block" } : { display: "none" }}
        >
          <div className="modal-container">
            <div
              className="x-button-container"
              id="modal-close"
              onClick={() => setModalOpen(false)}
            >
              <div className="x-button">X</div>
            </div>
            <div
              className="slides-modal"
              style={{ opacity: 1, transform: `translate(-${position}%)` }}
            >
              <img
                className="photoSlides-modal"
                src="/images/goldfish1.jfif"
                id="slideImg"
                alt="goldfish1"
              />
            </div>
            <div
              className="slides-modal"
              style={{ opacity: 1, transform: `translate(-${position}%)` }}
            >
              <img
                className="photoSlides-modal"
                src="/images/goldfish2.jfif"
                id="slideImg"
                alt="goldfish2"
              />
            </div>
            <div
              className="slides-modal"
              style={{ opacity: 1, transform: `translate(-${position}%)` }}
            >
              <img
                className="photoSlides-modal"
                src="/images/goldfish3.jfif"
                id="slideImg"
                alt="goldfish3"
              />
            </div>
            <div
              className="slides-modal"
              style={{ opacity: 1, transform: `translate(-${position}%)` }}
            >
              <img
                className="photoSlides-modal"
                src="/images/goldfish4.jfif"
                id="slideImg"
                alt="goldfish4"
              />
            </div>
            <div
              className="slides-modal"
              style={{ opacity: 1, transform: `translate(-${position}%)` }}
            >
              <img
                className="photoSlides-modal"
                src="/images/goldfish5.jfif"
                id="slideImg"
                alt="goldfish5"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="prev pointer gfPointer"
        style={{ zIndex: 3 }}
        onClick={prev}
      >
        &lt;
      </div>
      <div
        className="next pointer gfPointer"
        style={{ zIndex: 3 }}
        onClick={next}
      >
        &gt;
      </div>
    </div>
  );
};
export default Goldfish;
