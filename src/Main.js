import React, { Component } from "react"
import "./Main.css"

import Header from "./components/Header"
import Home from "./pages/Home"

class Main extends Component {
  render() {
    return (
      <div id="rootDiv">
        <header>
          <div className="header">
            <div className="header_wrapper">
              <ul>
                <li>Home</li>
                <li>Tools</li>
                <li>Youtubers</li>
              </ul>
            </div>
          </div>
        </header>
        <section className="body">
          <Home />
        </section>
      </div>
    )
  }
}

export default Main
