import Header from "../components/header";

function HomePage() {
  return (
    <div className="canvas">
      <Header />
      <div className="page-wrapper">
        <section id="page">
          <div className="about-wrapper">
            <h1 className="about-name">About</h1>
          </div>
          <div className="about-spacer">
            <div className="about-spacer-content">&nbsp;</div>
          </div>
          <div className="about-flex">
            <div className="about-left">
              <div className="about-info">
                <h3>
                  <strong>Yiqing Yu</strong>
                </h3>
                <p>Freelance editor/assistant editor.</p>
                <p>Born and raised in Beijing, China.</p>
                <p>Based in Los Angeles, California.</p>
                <p>Learning to code.</p>
              </div>
              <div className="text-spacer">
                <div className="text-spacer-content">&nbsp;</div>
              </div>
              <div className="about-contact-info">
                <div className="about-info">
                  <h3>
                    <strong>Contact</strong>
                  </h3>
                  <p>
                    Email:
                    <a href="mailto:yiqingyu515@gmail.com">
                      yiqingyu515@gmail.com
                    </a>
                  </p>
                  <p>
                    Instagram:
                    <a href="https://www.instagram.com/yyq.mxf/">yyq.mxf</a>
                  </p>
                </div>
              </div>
              <div className="text-spacer">
                <div className="text-spacer-content">&nbsp;</div>
              </div>
              <div className="about-press-info">
                <div className="about-info">
                  <h3>
                    <strong>Press</strong>
                  </h3>
                  <p>
                    <a href="https://www.imdb.com/name/nm10733076/?ref_=ttfc_fc_cr6">
                      IMDb
                    </a>
                  </p>
                  <p>
                    <a href="http://voyagela.com/interview/meet-yiqing-yu-yiqing-yu-glendale/">
                      VoyageLA
                    </a>
                  </p>
                  <p>
                    <a href="https://www.ukfilmreview.co.uk/post/filmmaker-interview-with-yiqing-yu">
                      UK FILM REVIEW
                    </a>
                  </p>
                </div>
              </div>
              <div className="about-picture-wrapper-mobile">
                <img
                  className="about-picture-mobile"
                  src="images/cute_girl.jpeg"
                  alt="self"
                />
              </div>
            </div>
            <div className="about-right">
              <div className="about-picture-wrapper">
                <img
                  className="about-picture"
                  src="images/cute_girl.jpeg"
                  alt="self"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
