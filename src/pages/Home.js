import React from "react"

/* css */
import "./Home.css"

// images
import Home_main_iamges from "./images/Home_cafe_01.jpg"

const Home = () => {
  return (
    <section className="Home">
      <div className="Homebody">
        <div className="Homebody_img">
          <img
            src={Home_main_iamges}
            title="latte_deconstructed_bar"
            alt="latte_deconstructed_bar"
          />
        </div>
        <h1>this is Home</h1>
      </div>
    </section>
  )
}

export default Home
