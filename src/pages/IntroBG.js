import React from "react"

/* css */
import "./IntroBG.css"

const IntroBG = () => {
  return (
    <section className="MainIntro-Section">
      <div className="MainIntro-wrapper">
        <div className="intro-inner-wrapper">
          <p className="iiw-f1">Hi, I'm</p>
          <p className="iiw-f2">
            <label>Seok</label> Woohyeon,
          </p>
          <p className="iiw-f3">
            <label>web</label> developer.
          </p>
        </div>
      </div>

      <div className="MyInfoBox">
        <div className="mib-InnerWrapper">
          <div className="mib-iw-Content">
            <div className="mib-iw-con">
              <span>About me</span>
              <div className="mib-iw-con-aboutme"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntroBG
