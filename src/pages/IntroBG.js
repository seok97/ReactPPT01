import React from "react"

/* css */
import "./IntroBG.css"

const IntroBG = () => {
  return (
    <section className="MainIntro-Section">
      <div className="MainIntro-wrapper">
        <div className="intro-inner-wrapper">
          <p className="iiw-f1">Hi I'm</p>
          <p className="iiw-f2">
            <label>seok</label> <label>w</label>oo<label>h</label>yeon
          </p>
          <p className="iiw-f3">Web developer</p>
        </div>
      </div>

      <div className="MyInfoBox">
        <div className="mib-InnerWrapper">
          <div className="mib-iw-Content"></div>
        </div>
      </div>
    </section>
  )
}

export default IntroBG
