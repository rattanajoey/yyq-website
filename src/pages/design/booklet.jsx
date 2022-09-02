import Header from "../../components/header";

const Booklet = () => {
  return (
    <div className="canvas">
      <Header />
      <div className="page-wrapper">
        <section>
          <div className="design-info" style={{ paddingTop: 0 }}>
            <h3>How to Be A Domestic Helper, 2015</h3>
            <p style={{ marginBottom: 0 }}>
              A instructional book of domestic helper's psychological profession
              analysis.
            </p>
          </div>
          <div className="design-pictures">
            <div className="flex-row">
              <div className="flex-column">
                <div>
                  <img
                    className="booklet-image"
                    src="/images/booklet1.1.jpg"
                    alt="booklet1"
                  />
                </div>
                <div>
                  <img
                    className="booklet-image"
                    src="/images/booklet1.3.jpg"
                    alt="booklet3"
                  />
                </div>
                <div>
                  <img
                    className="booklet-image"
                    src="/images/booklet1.5.jpg"
                    alt="booklet5"
                  />
                </div>
              </div>
              <div className="flex-column">
                <div>
                  <img
                    className="booklet-image"
                    src="/images/booklet1.2.jpg"
                    alt="booklet2"
                  />
                </div>
                <div>
                  <img
                    className="booklet-image"
                    src="/images/booklet1.4.jpg"
                    alt="booklet4"
                  />
                </div>
                <div>
                  <img
                    className="booklet-image"
                    src="/images/booklet1.6.jpg"
                    alt="booklet6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="about-spacer">
            <div className="about-spacer-content">&nbsp;</div>
          </div>
          <div className="design-info" style={{ paddingTop: 0 }}>
            <h3>American Psycho Story Book, 2015</h3>
            <p style={{ marginBottom: 0 }}>
              A story book for the psychological analysis of the movie American
              Psycho.
            </p>
          </div>
          <div className="design-pictures">
            <img
              className="full-width"
              src="/images/psycho.jpeg"
              alt="psycho"
            />
          </div>
          <div className="design-pictures">
            <div className="flex-row">
              <div className="flex-column">
                <div className="booklet-left-col">
                  <img
                    className="booklet-image-psycho"
                    src="/images/psycho1.1.jpg"
                    alt="psycho1"
                  />
                </div>
                <div className="booklet-left-col">
                  <img
                    className="booklet-image-psycho"
                    src="/images/psycho1.3.jpg"
                    alt="psycho3"
                  />
                </div>
                <div className="booklet-left-col">
                  <img
                    className="booklet-image-psycho"
                    src="/images/psycho1.5.jpg"
                    alt="psycho5"
                  />
                </div>
                <div className="booklet-left-col">
                  <img
                    className="booklet-image-psycho"
                    src="/images/psycho1.7.jpg"
                    alt="psycho7"
                  />
                </div>
                <div className="booklet-left-col">
                  <img
                    className="booklet-image-psycho"
                    src="/images/psycho1.9.jpg"
                    alt="psycho9"
                  />
                </div>
                <div className="booklet-left-col">
                  <img
                    className="booklet-image-psycho"
                    src="/images/psycho1.11.jpg"
                    alt="psycho11"
                  />
                </div>
                <div className="booklet-left-col">
                  <img
                    className="booklet-image-psycho"
                    src="/images/psycho1.13.jpg"
                    alt="psycho13"
                  />
                </div>
              </div>
              <div className="flex-column">
                <div className="booklet-right-col">
                  <img
                    className="booklet-image-psycho"
                    src="/images/psycho1.2.jpg"
                    alt="psycho2"
                  />
                </div>
                <div className="booklet-right-col">
                  <img
                    className="booklet-image-psycho"
                    src="/images/psycho1.4.jpg"
                    alt="psycho4"
                  />
                </div>
                <div className="booklet-right-col">
                  <img
                    className="booklet-image-psycho"
                    src="/images/psycho1.6.jpg"
                    alt="psycho6"
                  />
                </div>
                <div className="booklet-right-col">
                  <img
                    className="booklet-image-psycho"
                    src="/images/psycho1.8.jpg"
                    alt="psycho8"
                  />
                </div>
                <div className="booklet-right-col">
                  <img
                    className="booklet-image-psycho"
                    src="/images/psycho1.10.jpg"
                    alt="psycho10"
                  />
                </div>
                <div className="booklet-right-col">
                  <img
                    className="booklet-image-psycho"
                    src="/images/psycho1.12.jpg"
                    alt="psycho12"
                  />
                </div>
                <div className="booklet-right-col">
                  <img
                    className="booklet-image-psycho"
                    src="/images/psycho1.14.jpg"
                    alt="psycho14"
                  />
                </div>
              </div>
            </div>
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
export default Booklet;
