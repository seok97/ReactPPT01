import React, { Component } from "react"
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom"
import "./Main.css"

import Home from "./pages/Home"
import ToolsList from "./pages/ToolsList"
import YoutuberList from "./pages/YoutuberList"

class Main extends Component {
  render() {
    return (
      <Router>
        <div id="rootDiv">
          <header>
            <div className="header">
              <div className="header_wrapper">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/Tools">Tools</Link>
                  </li>
                  <li>
                    <Link to="/Youtubers">Youtubers</Link>
                  </li>
                </ul>
              </div>
            </div>
          </header>
          <section className="body">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Tools" component={ToolsList} />
              <Route exact path="/Youtubers" component={YoutuberList} />
            </Switch>
          </section>
        </div>
      </Router>
    )
  }
}

export default Main
