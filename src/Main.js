import React, { Component } from "react"
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom"
import "./Main.css"

// pages
import Home from "./pages/Home"
import Skils from "./pages/Skils"
import Projects from "./pages/Projects"

// components
import Homeimage from "./components/Homeimage"

// images
import rogoimg from "./images/swh_rogo.png"

class Main extends Component {
  render() {
    return (
      <Router>
        <div id="rootDiv">
          <header>
            <div className="header_div">
              <div className="navbar">
                <div className="nav_rogoimg">
                  <Link to="/">
                    <img src={rogoimg} alt="rogo_swh" />
                  </Link>
                </div>
                <ul className="header_ul">
                  <li className="header_ul_li">
                    <Link to="/">Main</Link>
                  </li>
                  <li className="header_ul_li">
                    <Link to="/Skils">Skils</Link>
                  </li>
                  <li className="header_ul_li">
                    <Link to="/Projects">Projects</Link>
                  </li>
                </ul>
              </div>
            </div>
          </header>
          <section className="body">
            <Homeimage />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Skils" component={Skils} />
              <Route exact path="/Projects" component={Projects} />
            </Switch>
          </section>
          <footer>
            <h1>this is footer</h1>
          </footer>
        </div>
      </Router>
    )
  }
}

export default Main
