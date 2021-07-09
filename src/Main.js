import React, { Component } from "react"
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom"

// css
import "./Main.css"

// pages
import IntroBG from "./pages/IntroBG"
import Blog from "./pages/Blog"
import Projects from "./pages/Projects"

// components

// images
import rogoimg from "./images/swh_rogo.png"

// bootstrap document
import { Container } from "react-bootstrap"

class Main extends Component {
  render() {
    return (
      <Router>
        <div id="rootDiv">
          <header>
            <div className="header_div">
              <div className="navbar">
                <div className="nav_rogoimg">
                  <Link to="/" className="ac-deco">
                    <img src={rogoimg} alt="rogo_swh" />
                  </Link>
                </div>
                <ul className="header_ul">
                  <li className="header_ul_li">
                    <Link to="/" className="ac-deco">
                      Main
                    </Link>
                  </li>
                  <li className="header_ul_li">
                    <Link to="/Blog" className="ac-deco">
                      Blog
                    </Link>
                  </li>
                  <li className="header_ul_li">
                    <Link to="/Projects" className="ac-deco">
                      Projects
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </header>

          <section className="body">
            <Switch>
              <Route exact path="/" component={IntroBG} />
              <Route exact path="/Blog" component={Blog} />
              <Route exact path="/Projects" component={Projects} />
            </Switch>
          </section>
          <footer>
            <div className="Footer-wrapper">
              <div className="f-w-contact">
                <div className="f-w-c-span">
                  <span>slgo1237@gmail.com</span>
                </div>
                <div className="f-w-c-span">
                  <span>
                    <a
                      href="https://github.com/seok97/ReactPPT01"
                      className="ac-deco">
                      github
                    </a>
                  </span>
                </div>
              </div>
              <div className="f-w-create">
                <span>create by SeokWooHyeon</span>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    )
  }
}

export default Main
