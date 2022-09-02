import { Link } from "react-router-dom";

const Splash = () => {
  return (
    <div className="splash-background">
      <div className="splash-filter">
        <div className="splash-content">
          <h1 className="splash-name">YIQING YU</h1>
          <div className="splash-main">
            <div className="splash-title">
              <h1 className="splash-title-name">This is water.</h1>
            </div>
            <div className="splash-sub-title">
              <p className="splash-sub-title-name">
                portfolio of video/art-related work
              </p>
            </div>
            <div className="splash-enter">
              <div className="splash-enter-button">
                <ul>
                  <li>
                    <Link to="/home">enter</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
