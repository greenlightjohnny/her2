import React, { useState } from "react"
import { Link } from "gatsby"
import Style from "./navbar.module.scss"

function Navbar() {
  const [navnames, setNavnames] = useState(false)

  return (
    <div className={Style.outer}>
      <div className={Style.container}>
        <h3>
          <Link to="/">
            HER2.<span className={Style.me}>ME</span>
          </Link>
        </h3>

        <nav
          className={`${Style.mobile} ${
            navnames ? Style.showmenu : Style.hidemenu
          }`}
        >
          <ul>
            <li onClick={() => setNavnames(false)}>
              <Link
                activeClassName={Style.active}
                to="/"
                activeClassName={Style.active}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                activeClassName={Style.active}
                className={Style.darrow}
                to="/basics"
              >
                Basics
                <div className={Style.drop}>
                  <Link
                    activeClassName={Style.active}
                    activeClassName={Style.active}
                    to="/whatis"
                  >
                    What is HER2?
                  </Link>
                  <Link activeClassName={Style.active} to="/nope">
                    Stages
                  </Link>
                  <Link activeClassName={Style.active} to="/nope">
                    History
                  </Link>
                  <Link activeClassName={Style.active} to="/nope">
                    HER2+ (Positive)
                  </Link>
                  <Link activeClassName={Style.active} to="/nope">
                    HER2- (Negative)
                  </Link>
                  <Link activeClassName={Style.active} to="/nope">
                    link6
                  </Link>
                </div>
              </Link>
            </li>
            <li>
              <Link
                activeClassName={Style.active}
                className={Style.darrow}
                to="/traditional"
              >
                Traditional
                <div className={Style.drop}>
                  <Link activeClassName={Style.active} to="/nope">
                    Chemotherapy
                  </Link>
                  <Link activeClassName={Style.active} to="/nope">
                    Immunotherapy
                  </Link>
                  <Link activeClassName={Style.active} to="/nope">
                    Surgery
                  </Link>
                  <Link activeClassName={Style.active} to="/nope">
                    Radiation
                  </Link>
                  <Link activeClassName={Style.active} to="/nope">
                    Herceptin (Trastuzumab)
                  </Link>
                  <Link activeClassName={Style.active} to="/nope">
                    Perjeta (Pertuzumab)
                  </Link>
                  <Link activeClassName={Style.active} to="/nope">
                    Kadcyla
                  </Link>
                  <Link activeClassName={Style.active} to="/nope">
                    Nerlynx (Neratinib)
                  </Link>
                  <Link activeClassName={Style.active} to="/nope">
                    Tykerb (Lapatinib)
                  </Link>
                </div>
              </Link>
            </li>
            <li>
              <Link
                activeClassName={Style.active}
                className={Style.darrow}
                to="/alternative"
              >
                Alternative
                <div className={Style.drop}>
                  <Link activeClassName={Style.active} to="/nope">
                    Clinical Trials
                  </Link>
                  <Link activeClassName={Style.active} to="/nope">
                    Fake Treatments
                  </Link>
                  <Link activeClassName={Style.active} to="/nope">
                    link3
                  </Link>
                  <Link activeClassName={Style.active} to="/nope">
                    link4
                  </Link>
                  <Link activeClassName={Style.active} to="/nope">
                    link5
                  </Link>
                  <Link activeClassName={Style.active} to="/nope">
                    link6
                  </Link>
                </div>
              </Link>
            </li>
            <li>
              <Link
                activeClassName={Style.active}
                className={Style.darrow}
                to="/blogposts"
              >
                Latest{" "}
                <div className={Style.drop}>
                  <Link activeClassName={Style.active} to="/nope">
                    link1
                  </Link>
                  <Link activeClassName={Style.active} to="/nope">
                    link2
                  </Link>
                  <Link activeClassName={Style.active} to="/nope">
                    link3
                  </Link>
                  <Link activeClassName={Style.active} to="/nope">
                    link4
                  </Link>
                  <Link activeClassName={Style.active} to="/nope">
                    link5
                  </Link>
                  <Link activeClassName={Style.active} to="/nope">
                    link6
                  </Link>
                </div>
              </Link>
            </li>
            <li>
              <Link activeClassName={Style.active} to="/about">
                About
              </Link>
            </li>
          </ul>
        </nav>

        <button
          className={Style.navbutton}
          onClick={() => setNavnames(!navnames)}
        >
          <span
            className={`${Style.navspan} ${navnames ? Style.animate : null} `}
          ></span>
        </button>
      </div>
    </div>
  )
}

export default Navbar
