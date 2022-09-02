import Header from "../../components/header";

const Documentary = () => {
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
                src="/images/sound_stage_thumbnail.png"
                alt="sound stage"
              />
              <iframe
                className="vimeo"
                src="http://www.youtube.com/embed/FNIQ8_5cLjg?list=PL7dQ19jsdStX5ZbFdeoPjdZVJQrfOszEe&index=25&wmode=opaque&enablejsapi=1&autoplay=0"
                height="auto"
                width="100%"
                frameBorder={0}
                allow="autoplay; fullscreen"
                allowFullScreen=""
                style={{ opacity: 1 }}
                title="sound stage"
              />
            </div>
            <div className="film-info">
              <h3>Sound/Stage, 2020, LA Phil web series</h3>
              <p className="crew" style={{ margin: "14px 40px" }}>
                Directed by James Lees
                <br />
                Produced by LA Phil Media
                <br />
                Edited by Yiqing Yu (at Parallax Post)
              </p>
              <p>
                SOUND/STAGE is an online concert film series produced by LA Phil
                Media, the media and digital initiatives arm of the Los Angeles
                Philharmonic Association. The series brings the LA Phil’s
                musical programs to the screen through collaborations with music
                video, documentary, and feature film directors.{" "}
              </p>
              <p>
                Each episode is organized around a single artist, ensemble, or
                theme that is explored through music as well as supporting
                essays, artwork, playlists, and interviews. Created in response
                to the COVID-19 pandemic, the series is filmed at the Hollywood
                Bowl, where musicians are able to perform together outside while
                socially distanced.
              </p>
            </div>
            <div className="about-spacer">
              <div className="about-spacer-content">&nbsp;</div>
            </div>
            <div className="video-holder">
              <img
                onclick="event.target.style.opacity = '0', event.target.style.visibility = 'hidden'"
                className="video-thumbnail"
                src="/images/fwe_thumbnail.png"
                alt="fwe"
              />
              <iframe
                className="vimeo"
                src="https://player.vimeo.com/video/466472206?app_id=122963&wmode=opaque&autoplay=0"
                height="auto"
                width="100%"
                frameBorder={0}
                allow="autoplay; fullscreen"
                allowFullScreen=""
                style={{ opacity: 1 }}
                title="fwe"
              />
            </div>
            <div className="film-info">
              <h3>First, We Eat, 2020, documentary short</h3>
              <p className="crew" style={{ margin: "14px 40px" }}>
                Directed by Windsor Wong &amp; Mireia Vilanova
                <br />
                Written by Windsor Wong
                <br />
                Produced by Windsor Wong &amp; Mireia Vilanova
                <br />
                Cinematography by Jiahao Zhang
                <br />
                Edited by Yiqing Yu &amp; Yufei Skylar Zhang
              </p>
              <p>
                An observational portrait of the California Chinese community
                through the eyes of a Chinese restaurant in Monterey Park and an
                LA-based recent graduate trying to navigate the difficulties of
                the 2020 pandemic.{" "}
              </p>
              <p>Password: FWE2020</p>
              <div className="film-row">
                <div className="film-row-column">
                  <h3 className="film-row-title">Official Selection</h3>
                  <p style={{ marginTop: 14, marginBottom: 0 }}>
                    Asians on Film Festival
                  </p>
                  <p style={{ margin: 0 }}>
                    Seattle Asian American Film Festival
                  </p>
                </div>
              </div>
            </div>
            <div className="about-spacer">
              <div className="about-spacer-content">&nbsp;</div>
            </div>
            <div className="video-holder">
              <img
                onclick="event.target.style.opacity = '0', event.target.style.visibility = 'hidden'"
                className="video-thumbnail"
                src="/images/inhabitat_thumbnail.png"
                alt="inhabitat"
              />
              <iframe
                className="vimeo"
                src="https://player.vimeo.com/video/198228136?wmode=opaque&autoplay=0"
                height="auto"
                width="100%"
                frameBorder={0}
                allow="autoplay; fullscreen"
                allowFullScreen=""
                style={{ opacity: 1 }}
                title="inhabitat"
              />
            </div>
            <div className="film-info">
              <h3>Inhabitat, 2016, CNEX's Annual Theme Project documentary</h3>
              <p className="crew" style={{ margin: "14px 40px" }}>
                Directed by Yip Sze Sze
                <br />
                Produced by CNEX Hong Kong
                <br />
                Cinematography by Yip Sze Sze
                <br />
                Edited by Yiqing Yu &amp; Yip Sze Sze
              </p>
              <p>
                The film focuses on two elderly residences living in Shanghai, a
                well-developed city in Mainland China.
              </p>
              <p>
                Wang, a retired music teacher, lives alone in her old house
                after her husband passed away. Her son lives aboard with his
                family, and they had not had a reunion for years. Wang applied
                for visa twice, but got rejected both times. Sheng, a retired
                Japanese teacher, has not been married and lives alone. He met
                Mr.Konno in a Japanese class. After Mr.Konno had got back to
                Japan, they continued writing letters as a pen pal. When Sheng
                heard that Mr.Konno has been severely ill, he wants to go to
                Japan and visit his old friend, but his visa application got
                rejected.
                <br />
                Meanwhile, Wang and Cheng are looking for a suitable nursing
                home for their retired life.
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
export default Documentary;
