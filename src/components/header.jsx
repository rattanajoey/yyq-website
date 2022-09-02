import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [change, setChange] = useState(false);
  const [changeMenu, setChangeMenu] = useState("");
  const location = useLocation().pathname;

  const OpenMenu = () => {
    setChange(!change);
    setChangeMenu("change-menu");
  };
  return (
    <div className="headerWrapper">
      <header id="header">
        <div className="wrapper">
          <div id="logo" data-content-field="site-title">
            <h1 className="logo-text">
              <Link to="/" style={{ letterSpacing: "0.2em" }}>
                THIS IS WATER
              </Link>
            </h1>
            <h2 className="logo-subtitle">YIQING YU</h2>
          </div>
          <div id="topNav">
            <nav className="main-nav" data-content-field="navigation">
              <div className="nav-wrapper">
                <ul className="cf">
                  <li className="splash-page-collection">
                    <Link className="nav-text" to="/">
                      <span> COVER </span>
                    </Link>
                  </li>
                  <li
                    className={
                      location === "/filmography"
                        ? "current splash-page-collection"
                        : "splash-page-collection"
                    }
                  >
                    <div className="dropdown">
                      <Link className="nav-text" to="/filmography">
                        <span className="plus">+</span>
                        <span> FILMOGRAPHY </span>
                      </Link>
                      <div className="dropdown-wrapper">
                        <div className="dropdown-content">
                          <ul>
                            <li>
                              <Link
                                className="dropdown-nav-text"
                                to="/narrative"
                              >
                                <span> Narrative Short </span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-nav-text"
                                to="/experiment"
                              >
                                <span> Experimental Cinema </span>
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="dropdown-nav-text"
                                to="/documentary"
                              >
                                <span> Documentary </span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    className={
                      location === "/design"
                        ? "current splash-page-collection"
                        : "splash-page-collection"
                    }
                  >
                    <div className="dropdown">
                      <Link className="nav-text" to="/design">
                        <span className="plus">+</span>
                        <span> DESIGN </span>
                      </Link>
                      <div className="dropdown-wrapper">
                        <div className="dropdown-content">
                          <ul>
                            <li>
                              <Link className="dropdown-nav-text" to="/booklet">
                                <span> Booklet </span>
                              </Link>
                            </li>
                            <br />
                            <li>
                              <Link className="dropdown-nav-text" to="/graphic">
                                <span> Graphic </span>
                              </Link>
                            </li>
                            <br />
                            <li>
                              <Link
                                className="dropdown-nav-text"
                                to="/interactive"
                              >
                                <span> Interactive </span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    className={
                      location === "/photography"
                        ? "current splash-page-collection"
                        : "splash-page-collection"
                    }
                  >
                    <div className="dropdown">
                      <Link className="nav-text" to="/photography">
                        <span className="plus">+</span>
                        <span> PHOTOGRAPHY </span>
                      </Link>
                      <div className="dropdown-wrapper">
                        <div className="dropdown-content">
                          <ul>
                            <li>
                              <Link
                                className="dropdown-nav-text"
                                to="/goldfish"
                              >
                                <span> Gold Fish </span>
                              </Link>
                            </li>
                            <br />
                            <li>
                              <Link
                                className="dropdown-nav-text"
                                to="/souvenirs"
                              >
                                <span> Souvenirs </span>
                              </Link>
                            </li>
                            <br />
                            <li>
                              <Link
                                className="dropdown-nav-text"
                                to="/ontheroad"
                              >
                                <span> On The Road </span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    className={
                      location === "/blog"
                        ? "current splash-page-collection"
                        : "splash-page-collection"
                    }
                  >
                    <Link className="nav-text" to="/blog">
                      <span> ART BLOG </span>
                    </Link>
                  </li>
                  <li
                    className={
                      location === "/home"
                        ? "current splash-page-collection"
                        : "splash-page-collection"
                    }
                  >
                    <Link className="nav-text" to="/home">
                      <span> About </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
            <nav className="mobile-nav" data-content-field="navigation">
              <div className="hamburger-menu" onClick={OpenMenu}>
                <div className={`${change}hamburger1 hamburger1`} />
                <div className={`${change}hamburger2 hamburger2`} />
                <div className={`${change}hamburger3 hamburger3`} />
              </div>
            </nav>
          </div>
        </div>
      </header>
      <nav className={`mobile-menu ${changeMenu}`} id="mobMenu">
        <ul>
          <li className="splash-page-collection" id="mobTabTitle">
            <Link to="/">COVER</Link>
          </li>
          <li className="index-collection">
            <span className="plus" id="mobPlus">
              +
            </span>
            <Link to="/filmography">FILMOGRAPHY</Link>
            <ul>
              <li className="page-collection" id="mobTab">
                <Link to="/narrative">Narrative Short</Link>
              </li>
              <li className="page-collection" id="mobTab">
                <Link to="/expirement">Experimental Cinema</Link>
              </li>
              <li className="page-collection" id="mobTab">
                <Link to="/documentary">Documentary</Link>
              </li>
            </ul>
          </li>
          <li className="index-collection">
            <span className="plus" id="mobPlus">
              +
            </span>
            <Link to="/design">DESIGN</Link>
            <ul>
              <li className="page-collection" id="mobTab">
                <Link to="/booklet">Booklet</Link>
              </li>
              <li className="page-collection" id="mobTab">
                <Link to="/graphic">Graphic</Link>
              </li>
              <li className="page-collection" id="mobTab">
                <Link to="/interactive">Interactive</Link>
              </li>
            </ul>
          </li>
          <li className="index-collection">
            <span className="plus" id="mobPlus">
              +
            </span>
            <Link to="/photography">PHOTOGRAPHY</Link>
            <ul>
              <li className="page-collection" id="mobTab">
                <Link to="/goldfish">Gold Fish</Link>
              </li>
              <li className="page-collection" id="mobTab">
                <Link to="/souvenirs">Souvenirs</Link>
              </li>
              <li className="page-collection" id="mobTab">
                <Link to="/ontheroad">On the Road</Link>
              </li>
            </ul>
          </li>
          <li className="blog-collection" id="mobTabTitle">
            <Link to="/blog">ART BLOG</Link>
          </li>
          <li className="page-collection" id="mobTabTitle">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
