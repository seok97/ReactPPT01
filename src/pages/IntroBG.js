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
        <div className="mib-InnerWrapper container d-flex flex-column justify-content-center align-content-center">
          <div className="mib-iw-Content int-fonts d-flex flex-column justify-content-center">
            <div className="mib-iw-con-about m-2">
              <span>About me</span>
            </div>
            <div className="mib-iw-con-introduce m-2">
              <p>Java 를 주로 다루고, JavaScript 를 좋아합니다.</p>
              <br />
              <span></span>
            </div>
          </div>
          <div className="mib-iw-con-skils int-fonts container">
            <div className="mib-iw-con-s">
              <span>Skils</span>
            </div>
            <div className="mib-iw-con-s-w container m-4">
              <div className="s-chart-f">
                <span>Front-end</span>
                <footer>
                  <div className="chart"></div>
                </footer>
              </div>
              <div className="s-chart-f">
                <span>Back-end</span>
                <footer>
                  <div className="chart chart-b"></div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntroBG
