import Header from "../../components/header";

const Interactive = () => {
  return (
    <div className="canvas">
      <Header />
      <div className="page-wrapper">
        <section>
          <div className="design-info" style={{ paddingTop: 0 }}>
            <h3>Driving in Hong Kong, 2015</h3>
            <p style={{ marginBottom: 0 }}>
              An interactive car racing game project using software Arduino and
              Processing.
            </p>
          </div>
          <div className="design-pictures" style={{ padding: 0 }}>
            <img
              className="full-width"
              src="/images/interactive1.png"
              alt="interactive1"
            />
            <p style={{ fontSize: 12, marginBottom: "4em" }}>
              Testing the game for the first time.
            </p>
          </div>
          <p className="crew" style={{ margin: "14px 40px" }}>
            Designed by Yiqing Yu and Yiqin Ma
            <br />
            Code created by Yiqing Yu
            <br />
            Documented by Yiqin Ma
          </p>
          <p style={{ marginBottom: "1.6em" }}>
            To create this interactive game, we connected Arduino to Processing
            to make the player experience the feeling of holding a steering
            wheel, driving on the road of HK. We used perspective view of the
            Hong Kong street from Google Map, and used different angles of the
            pictures of the car to give it a more realistic feeling. And
            obstacles are very common in the street, it makes more sense.{" "}
          </p>
          <p>
            In the motion sensing game we used to play, game devices are always
            the essentials. So we brought a round led light and black tapes, and
            assembled them together, to make a simulative steering wheel.
          </p>
          <div className="about-spacer">
            <div className="about-spacer-content">&nbsp;</div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Interactive;
