import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [change, setChange] = useState(false);
  const [changeMenu, setChangeMenu] = useState("");
  // const location = useLocation().pathname;

  const OpenMenu = () => {
    setChange(!change);
    setChangeMenu("change-menu");
  };
  return (
    <div className="headerWrapper">
      <header id="header">
        <div className="wrapper">
          <div id="logo" data-content-field="site-title">
            <h1 className="logo-text" style={{ letterSpacing: "0.2em" }}>
              <Link href="/">THIS IS WATER</Link>
            </h1>
            <h2 className="logo-subtitle">YIQING YU</h2>
          </div>
          <div id="topNav">
            <nav className="main-nav" data-content-field="navigation">
              <div className="nav-wrapper">
                <ul className="cf">
                  <li className="splash-page-collection">
                    <Link href="/">
                      <span className="nav-text"> COVER </span>
                    </Link>
                  </li>
                  <li
                  // className={
                  //   location === "/filmography"
                  //     ? "current splash-page-collection"
                  //     : "splash-page-collection"
                  // }
                  >
                    <div className="dropdown">
                      <Link href="/filmography">
                        <>
                          <span className="plus">+</span>
                          <span className="nav-text"> FILMOGRAPHY </span>
                        </>
                      </Link>
                      <div className="dropdown-wrapper">
                        <div className="dropdown-content">
                          <ul>
                            <li>
                              <Link href="/narrative">
                                <span className="dropdown-nav-text">
                                  Narrative Short
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/experiment">
                                <span className="dropdown-nav-text">
                                  Experimental Cinema
                                </span>
                              </Link>
                            </li>
                            <li>
                              <Link href="/documentary">
                                <span className="dropdown-nav-text">
                                  Documentary
                                </span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                  // className={
                  //   location === "/design"
                  //     ? "current splash-page-collection"
                  //     : "splash-page-collection"
                  // }
                  >
                    <div className="dropdown">
                      <Link href="/design">
                        <>
                          <span className="plus">+</span>
                          <span className="nav-text"> DESIGN </span>
                        </>
                      </Link>
                      <div className="dropdown-wrapper">
                        <div className="dropdown-content">
                          <ul>
                            <li>
                              <Link href="/booklet">
                                <span className="dropdown-nav-text">
                                  Booklet
                                </span>
                              </Link>
                            </li>
                            <br />
                            <li>
                              <Link href="/graphic">
                                <span className="dropdown-nav-text">
                                  Graphic
                                </span>
                              </Link>
                            </li>
                            <br />
                            <li>
                              <Link href="/interactive">
                                <span className="dropdown-nav-text">
                                  Interactive
                                </span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                  // className={
                  //   location === "/photography"
                  //     ? "current splash-page-collection"
                  //     : "splash-page-collection"
                  // }
                  >
                    <div className="dropdown">
                      <Link href="/photography">
                        <>
                          <span className="plus">+</span>
                          <span className="nav-text"> PHOTOGRAPHY </span>
                        </>
                      </Link>
                      <div className="dropdown-wrapper">
                        <div className="dropdown-content">
                          <ul>
                            <li>
                              <Link href="/goldfish">
                                <span className="dropdown-nav-text">
                                  Gold Fish
                                </span>
                              </Link>
                            </li>
                            <br />
                            <li>
                              <Link href="/souvenirs">
                                <span className="dropdown-nav-text">
                                  Souvenirs
                                </span>
                              </Link>
                            </li>
                            <br />
                            <li>
                              <Link href="/ontheroad">
                                <span className="dropdown-nav-text">
                                  On The Road
                                </span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                  // className={
                  //   location === "/blog"
                  //     ? "current splash-page-collection"
                  //     : "splash-page-collection"
                  // }
                  >
                    <Link href="/blog">
                      <span className="nav-text"> ART BLOG </span>
                    </Link>
                  </li>
                  <li
                  // className={
                  //   location === "/home"
                  //     ? "current splash-page-collection"
                  //     : "splash-page-collection"
                  // }
                  >
                    <Link href="/home">
                      <span className="nav-text"> About </span>
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
            <Link href="/">COVER</Link>
          </li>
          <li className="index-collection">
            <span className="plus" id="mobPlus">
              +
            </span>
            <Link href="/filmography">FILMOGRAPHY</Link>
            <ul>
              <li className="page-collection" id="mobTab">
                <Link href="/narrative">
                  <span className="dropdown-nav-text">Narrative Short</span>
                </Link>
              </li>
              <li className="page-collection" id="mobTab">
                <Link href="/expirement">Experimental Cinema</Link>
              </li>
              <li className="page-collection" id="mobTab">
                <Link href="/documentary">Documentary</Link>
              </li>
            </ul>
          </li>
          <li className="index-collection">
            <span className="plus" id="mobPlus">
              +
            </span>
            <Link href="/design">DESIGN</Link>
            <ul>
              <li className="page-collection" id="mobTab">
                <Link href="/booklet">Booklet</Link>
              </li>
              <li className="page-collection" id="mobTab">
                <Link href="/graphic">Graphic</Link>
              </li>
              <li className="page-collection" id="mobTab">
                <Link href="/interactive">Interactive</Link>
              </li>
            </ul>
          </li>
          <li className="index-collection">
            <span className="plus" id="mobPlus">
              +
            </span>
            <Link href="/photography">PHOTOGRAPHY</Link>
            <ul>
              <li className="page-collection" id="mobTab">
                <Link href="/goldfish">Gold Fish</Link>
              </li>
              <li className="page-collection" id="mobTab">
                <Link href="/souvenirs">Souvenirs</Link>
              </li>
              <li className="page-collection" id="mobTab">
                <Link href="/ontheroad">On the Road</Link>
              </li>
            </ul>
          </li>
          <li className="blog-collection" id="mobTabTitle">
            <Link href="/blog">ART BLOG</Link>
          </li>
          <li className="page-collection" id="mobTabTitle">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
