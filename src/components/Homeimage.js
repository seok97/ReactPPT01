import React from "react"

import "./Homeimage.css"

import Home_images from "../images/Home_cafe_01.jpg"

const Homeimage = () => {
  return (
    <>
      <div className="Homebody_img">
        <img
          src={Home_images}
          title="latte_deconstructed_bar"
          alt="latte_deconstructed_bar"
        />
      </div>
    </>
  )
}

export default Homeimage
