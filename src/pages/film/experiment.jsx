import Header from "../../components/header";

const Experiment = () => {
  return (
    <div className="canvas">
      <Header />
      <div className="page-wrapper">
        <section>
          <div className="flexbox">
            <div className="video-holder">
              <img
                onclick="event.target.style.opacity = '0', event.target.style.visibility = 'hidden'"
                className="video-thumbnail"
                src="/images/voices_thumbnail.png"
                alt="voices"
              />
              <iframe
                className="vimeo"
                src="https://player.vimeo.com/video/692964343?h=7c38e410cd&badge=0&autopause=0&player_id=0&app_id=58479"
                height="auto"
                width="100%"
                frameBorder={0}
                allow="autoplay; fullscreen"
                allowFullScreen=""
                style={{ opacity: 1 }}
                title="voices"
              />
            </div>
            <div className="film-info">
              <h3>Voices in My Head - CC is Dreaming, 2020, music video</h3>
              <p className="crew" style={{ margin: "14px 40px" }}>
                Directed by Curry Sicong Tian
                <br />
                Produced by Jiayun Li
                <br />
                Cinematography by Chaochen Li
                <br />
                3D Animation by Xiaotong Wen, Suki Su &amp; Curry Sicong Tian
                <br />
                Edited by Yiqing Yu
              </p>
              <p>Password: dreaming</p>
            </div>
            <div className="about-spacer">
              <div className="about-spacer-content">&nbsp;</div>
            </div>
            <div className="video-holder">
              <img
                onclick="event.target.style.opacity = '0', event.target.style.visibility = 'hidden'"
                className="video-thumbnail"
                src="/images/auto_thumbnail.png"
                alt="auto"
              />
              <iframe
                className="vimeo"
                src="https://player.vimeo.com/video/491643052?app_id=122963&autoplay=0"
                height="auto"
                width="100%"
                frameBorder={0}
                allow="autoplay; fullscreen"
                allowFullScreen=""
                style={{ opacity: 1 }}
                title="auto"
              />
            </div>
            <div className="film-info">
              <h3>AUTO, 2019, visual essay</h3>
              <p className="crew" style={{ margin: "14px 40px" }}>
                Directed and Written by Leo Purman &amp; Quinn Else
                <br />
                Produced by Fernando Barajas
                <br />
                Cinematography by Leo Purman
                <br />
                Edited by Yiqing Yu
              </p>
              <p>
                Trapped indoors, a screen-addicted man disassociates into his
                technological devices, blurring the line between man and
                machine.
              </p>
            </div>
            <div className="about-spacer">
              <div className="about-spacer-content">&nbsp;</div>
            </div>
            <div className="video-holder">
              <img
                onclick="event.target.style.opacity = '0', event.target.style.visibility = 'hidden'"
                className="video-thumbnail"
                src="/images/tai o_thumbnail.png"
                alt="tai o"
              />
              <iframe
                className="vimeo"
                src="https://player.vimeo.com/video/162678739?wmode=opaque&api=1&autoplay=0"
                height="auto"
                width="100%"
                frameBorder={0}
                allow="autoplay; fullscreen"
                allowFullScreen=""
                style={{ opacity: 1 }}
                title="tai o"
              />
            </div>
            <div className="film-info">
              <h3>Plankton, 2015, short documentary</h3>
              <p className="crew" style={{ margin: "14px 40px" }}>
                Directed by Yip Sze Sze
                <br />
                Written by Yip Sze Sze &amp; Yiqing Yu
                <br />
                Produced by Visible Record Limited
                <br />
                Edited by Yiqing Yu
              </p>
              <p>
                During the visit to Tai O, one of the offshore islands in Hong
                Kong, we run into the story about a mysterious man living in the
                isolated house at the south point on the island. That's where
                this self-reflected documentary started. <br />
                We interviewed people in town, traced the evidence of this man's
                existence, and filmed our perspective of this story.
              </p>
            </div>
            <div className="about-spacer">
              <div className="about-spacer-content">&nbsp;</div>
            </div>
            <div className="video-holder">
              <img
                onclick="event.target.style.opacity = '0', event.target.style.visibility = 'hidden'"
                className="video-thumbnail"
                src="/images/bridge_thumbnail.png"
                alt="bridge"
              />
              <iframe
                className="vimeo"
                src="https://player.vimeo.com/video/162684190?wmode=opaque&api=1&autoplay=1"
                height="auto"
                width="100%"
                frameBorder={0}
                allow="autoplay; fullscreen"
                allowFullScreen=""
                style={{ opacity: 1 }}
                title="bridge"
              />
            </div>
            <div className="film-info">
              <h3>The Bridge, 2015, visual essay</h3>
              <p className="crew" style={{ margin: "14px 40px" }}>
                Directed and written by Yiqing Yu
                <br />
                Cinematography by Yiqing Yu
                <br />
                Edited by Yiqing Yu
              </p>
              <p>
                I intended to document a meeting of the two sides of myself on a
                bridge. It's not the first time they met, but it's been a while
                since one of them moved to Hong Kong for college education.
              </p>
            </div>
            <div className="about-spacer">
              <div className="about-spacer-content">&nbsp;</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Experiment;
