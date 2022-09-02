import Header from "../../components/header";

const Graphic = () => {
  return (
    <div className="canvas">
      <Header />
      <div className="page-wrapper">
        <section>
          <div className="design-info" style={{ paddingTop: 0 }}>
            <h3>Wearable Design, 2016</h3>
            <p style={{ marginBottom: 0 }}>
              An overall design sketch of posture correcting shirt named PosMe.
            </p>
          </div>
          <div className="design-pictures">
            <img
              className="full-width"
              src="/images/graphic1.jpeg"
              alt="graphic1"
            />
          </div>
          <div className="about-spacer">
            <div className="about-spacer-content">&nbsp;</div>
          </div>
          <div className="design-info" style={{ paddingTop: 0 }}>
            <h3>2014: A Life Odyssey, 2014</h3>
            <p style={{ marginBottom: 0 }}>
              A technically informative poster of a digital generative art
              project.
            </p>
          </div>
          <div className="design-pictures">
            <img
              className="full-width"
              src="/images/graphic2.jpeg"
              alt="graphic2"
            />
          </div>
          <div className="about-spacer">
            <div className="about-spacer-content">&nbsp;</div>
          </div>
          <div className="design-info" style={{ paddingTop: 0 }}>
            <h3>Wonder Bridge, 2014</h3>
            <p style={{ marginBottom: 0 }}>
              A series of poster design for a school rock band show.
            </p>
          </div>
          <div
            className="design-pictures"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              className="full-width"
              src="/images/graphic3.jpg"
              alt="graphic3"
            />
          </div>
          <div className="about-spacer">
            <div className="about-spacer-content">&nbsp;</div>
          </div>
          <div className="about-spacer">
            <div className="about-spacer-content">&nbsp;</div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Graphic;
