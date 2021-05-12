import React, { Component } from "react"
import "./Main.css"

import Header from "./components/Header"
import Home from "./pages/Home"

class Main extends Component {
  render() {
    return (
      <div id="rootDiv">
        <Header />
        <section className="body">
          <Home />
        </section>
      </div>
    )
  }
}

export default Main
