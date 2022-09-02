import { useEffect, useState } from "react";
import Header from "../../components/header";

const Souvenirs = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [position, setPosition] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [plusOpacity, setPlusOpacity] = useState(false);
  const next = () => {
    if (currentIndex < 24) {
      setCurrentIndex((prevState) => prevState + 1);
    }
    if (currentIndex >= 24) {
      setCurrentIndex(1);
    }
  };
  const prev = () => {
    if (currentIndex > 1) {
      setCurrentIndex((prevState) => prevState - 1);
    }
    if (currentIndex <= 1) {
      setCurrentIndex(24);
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
    <div className={`canvas ${modalOpen}`}>
      <Header />
      <div className="table-wrapper">
        <div className="slideshow-Souvenirs">
          <div
            className="slidesSouvenirs"
            onMouseOver={() => setPlusOpacity(true)}
            onMouseOut={() => setPlusOpacity(false)}
            style={{ opacity: 1, transform: `translate(-${position}%)` }}
          >
            <img
              className="photoSlidesSouvenirs"
              src="/images/souvenirs/1-1-1.jpeg"
              id="slideImg"
              alt="souvenirs1"
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
              <h3 style={{ marginTop: 15 }}>Souvenirs</h3>
              <p>On Going, Polaroid Shooting</p>
            </div>
          </div>
          <div
            className="slidesSouvenirs"
            onMouseOver={() => setPlusOpacity(true)}
            onMouseOut={() => setPlusOpacity(false)}
            style={{ opacity: 1, transform: `translate(-${position}%)` }}
          >
            <img
              className="photoSlidesSouvenirs"
              src="/images/souvenirs/2-2-2.jpeg"
              id="slideImg"
              alt="souvenirs2"
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
          </div>
          <div
            className="slidesSouvenirs"
            onMouseOver={() => setPlusOpacity(true)}
            onMouseOut={() => setPlusOpacity(false)}
            style={{ opacity: 1, transform: `translate(-${position}%)` }}
          >
            <img
              className="photoSlidesSouvenirs"
              src="/images/souvenirs/3-3-3.jpeg"
              id="slideImg"
              alt="souvenirs3"
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
          </div>
          <div
            className="slidesSouvenirs"
            onMouseOver={() => setPlusOpacity(true)}
            onMouseOut={() => setPlusOpacity(false)}
            style={{ opacity: 1, transform: `translate(-${position}%)` }}
          >
            <img
              className="photoSlidesSouvenirs"
              src="/images/souvenirs/4-4-4.jpeg"
              id="slideImg"
              alt="souvenirs4"
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
          </div>
          <div
            className="slidesSouvenirs"
            onMouseOver={() => setPlusOpacity(true)}
            onMouseOut={() => setPlusOpacity(false)}
            style={{ opacity: 1, transform: `translate(-${position}%)` }}
          >
            <img
              className="photoSlidesSouvenirs"
              src="/images/souvenirs/5-5-5.jpeg"
              id="slideImg"
              alt="souvenirs5"
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
          </div>
          <div
            className="slidesSouvenirs"
            onMouseOver={() => setPlusOpacity(true)}
            onMouseOut={() => setPlusOpacity(false)}
            style={{ opacity: 1, transform: `translate(-${position}%)` }}
          >
            <img
              className="photoSlidesSouvenirs"
              src="/images/souvenirs/6-6-6.jpeg"
              id="slideImg"
              alt="souvenirs6"
            />
            <div
              className="plus-container"
              id="change-opacity"
              onClick={() => setModalOpen(true)}
              style={
                currentIndex === 6 && plusOpacity
                  ? { opacity: 1 }
                  : { opacity: 0 }
              }
            >
              <div className="plus-resize">+</div>
            </div>
          </div>
          <div
            className="slidesSouvenirs"
            onMouseOver={() => setPlusOpacity(true)}
            onMouseOut={() => setPlusOpacity(false)}
            style={{ opacity: 1, transform: `translate(-${position}%)` }}
          >
            <img
              className="photoSlidesSouvenirs"
              src="/images/souvenirs/7-7-7.jpeg"
              id="slideImg"
              alt="souvenirs7"
            />
            <div
              className="plus-container"
              id="change-opacity"
              onClick={() => setModalOpen(true)}
              style={
                currentIndex === 7 && plusOpacity
                  ? { opacity: 1 }
                  : { opacity: 0 }
              }
            >
              <div className="plus-resize">+</div>
            </div>
          </div>
          <div
            className="slidesSouvenirs"
            onMouseOver={() => setPlusOpacity(true)}
            onMouseOut={() => setPlusOpacity(false)}
            style={{ opacity: 1, transform: `translate(-${position}%)` }}
          >
            <img
              className="photoSlidesSouvenirs"
              src="/images/souvenirs/8-8-8.jpeg"
              id="slideImg"
              alt="souvenirs8"
            />
            <div
              className="plus-container"
              id="change-opacity"
              onClick={() => setModalOpen(true)}
              style={
                currentIndex === 8 && plusOpacity
                  ? { opacity: 1 }
                  : { opacity: 0 }
              }
            >
              <div className="plus-resize">+</div>
            </div>
          </div>
          <div
            className="slidesSouvenirs"
            onMouseOver={() => setPlusOpacity(true)}
            onMouseOut={() => setPlusOpacity(false)}
            style={{ opacity: 1, transform: `translate(-${position}%)` }}
          >
            <img
              className="photoSlidesSouvenirs"
              src="/images/souvenirs/9-9-9.jpeg"
              id="slideImg"
              alt="souvenirs9"
            />
            <div
              className="plus-container"
              id="change-opacity"
              onClick={() => setModalOpen(true)}
              style={
                currentIndex === 9 && plusOpacity
                  ? { opacity: 1 }
                  : { opacity: 0 }
              }
            >
              <div className="plus-resize">+</div>
            </div>
          </div>
          <div
            className="slidesSouvenirs"
            onMouseOver={() => setPlusOpacity(true)}
            onMouseOut={() => setPlusOpacity(false)}
            style={{ opacity: 1, transform: `translate(-${position}%)` }}
          >
            <img
              className="photoSlidesSouvenirs"
              src="/images/souvenirs/1.jpeg"
              id="slideImg"
              alt="souvenirs01"
            />
            <div
              className="plus-container"
              id="change-opacity"
              onClick={() => setModalOpen(true)}
              style={
                currentIndex === 10 && plusOpacity
                  ? { opacity: 1 }
                  : { opacity: 0 }
              }
            >
              <div className="plus-resize">+</div>
            </div>
          </div>
          <div
            className="slidesSouvenirs"
            onMouseOver={() => setPlusOpacity(true)}
            onMouseOut={() => setPlusOpacity(false)}
            style={{ opacity: 1, transform: `translate(-${position}%)` }}
          >
            <img
              className="photoSlidesSouvenirs"
              src="/images/souvenirs/2.jpeg"
              id="slideImg"
              alt="souvenirs02"
            />
            <div
              className="plus-container"
              id="change-opacity"
              onClick={() => setModalOpen(true)}
              style={
                currentIndex === 11 && plusOpacity
                  ? { opacity: 1 }
                  : { opacity: 0 }
              }
            >
              <div className="plus-resize">+</div>
            </div>
          </div>
          <div
            className="slidesSouvenirs"
            onMouseOver={() => setPlusOpacity(true)}
            onMouseOut={() => setPlusOpacity(false)}
            style={{ opacity: 1, transform: `translate(-${position}%)` }}
          >
            <img
              className="photoSlidesSouvenirs"
              src="/images/souvenirs/3.jpeg"
              id="slideImg"
              alt="souvenirs03"
            />
            <div
              className="plus-container"
              id="change-opacity"
              onClick={() => setModalOpen(true)}
              style={
                currentIndex === 12 && plusOpacity
                  ? { opacity: 1 }
                  : { opacity: 0 }
              }
            >
              <div className="plus-resize">+</div>
            </div>
          </div>
          <div
            className="slidesSouvenirs"
            onMouseOver={() => setPlusOpacity(true)}
            onMouseOut={() => setPlusOpacity(false)}
            style={{ opacity: 1, transform: `translate(-${position}%)` }}
          >
            <img
              className="photoSlidesSouvenirs"
              src="/images/souvenirs/5.jpeg"
              id="slideImg"
              alt="souvenirs05"
            />
            <div
              className="plus-container"
              id="change-opacity"
              onClick={() => setModalOpen(true)}
              style={
                currentIndex === 13 && plusOpacity
                  ? { opacity: 1 }
                  : { opacity: 0 }
              }
            >
              <div className="plus-resize">+</div>
            </div>
          </div>
          <div
            className="slidesSouvenirs"
            onMouseOver={() => setPlusOpacity(true)}
            onMouseOut={() => setPlusOpacity(false)}
            style={{ opacity: 1, transform: `translate(-${position}%)` }}
          >
            <img
              className="photoSlidesSouvenirs"
              src="/images/souvenirs/6.jpeg"
              id="slideImg"
              alt="souvenirs06"
            />
            <div
              className="plus-container"
              id="change-opacity"
              onClick={() => setModalOpen(true)}
              style={
                currentIndex === 14 && plusOpacity
                  ? { opacity: 1 }
                  : { opacity: 0 }
              }
            >
              <div className="plus-resize">+</div>
            </div>
          </div>
          <div
            className="slidesSouvenirs"
            onMouseOver={() => setPlusOpacity(true)}
            onMouseOut={() => setPlusOpacity(false)}
            style={{ opacity: 1, transform: `translate(-${position}%)` }}
          >
            <img
              className="photoSlidesSouvenirs"
              src="/images/souvenirs/7.jpeg"
              id="slideImg"
              alt="souvenirs07"
            />
            <div
              className="plus-container"
              id="change-opacity"
              onClick={() => setModalOpen(true)}
              style={
                currentIndex === 15 && plusOpacity
                  ? { opacity: 1 }
                  : { opacity: 0 }
              }
            >
              <div className="plus-resize">+</div>
            </div>
          </div>
          <div
            className="slidesSouvenirs"
            onMouseOver={() => setPlusOpacity(true)}
            onMouseOut={() => setPlusOpacity(false)}
            style={{ opacity: 1, transform: `translate(-${position}%)` }}
          >
            <img
              className="photoSlidesSouvenirs"
              src="/images/souvenirs/8.jpeg"
              id="slideImg"
              alt="souvenirs08"
            />
            <div
              className="plus-container"
              id="change-opacity"
              onClick={() => setModalOpen(true)}
              style={
                currentIndex === 16 && plusOpacity
                  ? { opacity: 1 }
                  : { opacity: 0 }
              }
            >
              <div className="plus-resize">+</div>
            </div>
          </div>
          <div
            className="slidesSouvenirs"
            onMouseOver={() => setPlusOpacity(true)}
            onMouseOut={() => setPlusOpacity(false)}
            style={{ opacity: 1, transform: `translate(-${position}%)` }}
          >
            <img
              className="photoSlidesSouvenirs"
              src="/images/souvenirs/9.jpeg"
              id="slideImg"
              alt="souvenirs09"
            />
            <div
              className="plus-container"
              id="change-opacity"
              onClick={() => setModalOpen(true)}
              style={
                currentIndex === 17 && plusOpacity
                  ? { opacity: 1 }
                  : { opacity: 0 }
              }
            >
              <div className="plus-resize">+</div>
            </div>
          </div>
          <div
            className="slidesSouvenirs"
            onMouseOver={() => setPlusOpacity(true)}
            onMouseOut={() => setPlusOpacity(false)}
            style={{ opacity: 1, transform: `translate(-${position}%)` }}
          >
            <img
              className="photoSlidesSouvenirs"
              src="/images/souvenirs/10.jpeg"
              id="slideImg"
              alt="souvenirs010"
            />
            <div
              className="plus-container"
              id="change-opacity"
              onClick={() => setModalOpen(true)}
              style={
                currentIndex === 18 && plusOpacity
                  ? { opacity: 1 }
                  : { opacity: 0 }
              }
            >
              <div className="plus-resize">+</div>
            </div>
          </div>
          <div
            className="slidesSouvenirs"
            onMouseOver={() => setPlusOpacity(true)}
            onMouseOut={() => setPlusOpacity(false)}
            style={{ opacity: 1, transform: `translate(-${position}%)` }}
          >
            <img
              className="photoSlidesSouvenirs"
              src="/images/souvenirs/11.jpeg"
              id="slideImg"
              alt="souvenirs011"
            />
            <div
              className="plus-container"
              id="change-opacity"
              onClick={() => setModalOpen(true)}
              style={
                currentIndex === 19 && plusOpacity
                  ? { opacity: 1 }
                  : { opacity: 0 }
              }
            >
              <div className="plus-resize">+</div>
            </div>
          </div>
          <div
            className="slidesSouvenirs"
            onMouseOver={() => setPlusOpacity(true)}
            onMouseOut={() => setPlusOpacity(false)}
            style={{ opacity: 1, transform: `translate(-${position}%)` }}
          >
            <img
              className="photoSlidesSouvenirs"
              src="/images/souvenirs/12.jpg"
              id="slideImg"
              alt="souvenirs012"
            />
            <div
              className="plus-container"
              id="change-opacity"
              onClick={() => setModalOpen(true)}
              style={
                currentIndex === 20 && plusOpacity
                  ? { opacity: 1 }
                  : { opacity: 0 }
              }
            >
              <div className="plus-resize">+</div>
            </div>
          </div>
          <div
            className="slidesSouvenirs"
            onMouseOver={() => setPlusOpacity(true)}
            onMouseOut={() => setPlusOpacity(false)}
            style={{ opacity: 1, transform: `translate(-${position}%)` }}
          >
            <img
              className="photoSlidesSouvenirs"
              src="/images/souvenirs/13.jpg"
              id="slideImg"
              alt="souvenirs013"
            />
            <div
              className="plus-container"
              id="change-opacity"
              onClick={() => setModalOpen(true)}
              style={
                currentIndex === 21 && plusOpacity
                  ? { opacity: 1 }
                  : { opacity: 0 }
              }
            >
              <div className="plus-resize">+</div>
            </div>
          </div>
          <div
            className="slidesSouvenirs"
            onMouseOver={() => setPlusOpacity(true)}
            onMouseOut={() => setPlusOpacity(false)}
            style={{ opacity: 1, transform: `translate(-${position}%)` }}
          >
            <img
              className="photoSlidesSouvenirs"
              src="/images/souvenirs/14.jpg"
              id="slideImg"
              alt="souvenirs014"
            />
            <div
              className="plus-container"
              id="change-opacity"
              onClick={() => setModalOpen(true)}
              style={
                currentIndex === 22 && plusOpacity
                  ? { opacity: 1 }
                  : { opacity: 0 }
              }
            >
              <div className="plus-resize">+</div>
            </div>
          </div>
          <div
            className="slidesSouvenirs"
            onMouseOver={() => setPlusOpacity(true)}
            onMouseOut={() => setPlusOpacity(false)}
            style={{ opacity: 1, transform: `translate(-${position}%)` }}
          >
            <img
              className="photoSlidesSouvenirs"
              src="/images/souvenirs/15.png"
              id="slideImg"
              alt="souvenirs015"
            />
            <div
              className="plus-container"
              id="change-opacity"
              onClick={() => setModalOpen(true)}
              style={
                currentIndex === 23 && plusOpacity
                  ? { opacity: 1 }
                  : { opacity: 0 }
              }
            >
              <div className="plus-resize">+</div>
            </div>
          </div>
          <div
            className="slidesSouvenirs"
            onMouseOver={() => setPlusOpacity(true)}
            onMouseOut={() => setPlusOpacity(false)}
            style={{ opacity: 1, transform: `translate(-${position}%)` }}
          >
            <img
              className="photoSlidesSouvenirs"
              src="/images/souvenirs/16.jpg"
              id="slideImg"
              alt="souvenirs016"
            />
            <div
              className="plus-container"
              id="change-opacity"
              onClick={() => setModalOpen(true)}
              style={
                currentIndex === 24 && plusOpacity
                  ? { opacity: 1 }
                  : { opacity: 0 }
              }
            >
              <div className="plus-resize">+</div>
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
export default Souvenirs;
