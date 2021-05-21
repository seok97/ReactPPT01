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
          <div className="mib-iw-Content int-fonts">
            <div className="mib-iw-con-about">
              <span>About me</span>
            </div>
            <div className="mib-iw-con-introduce">
              <p>
                웹 개발자 석우현 입니다.
                <br /> 혼자 웹 페이지 개발/배포 까지 해 보았으며
                <br />
                프론트엔드와 백엔드에 대해 잘 이해하고 있고 주로
                <br />
                프론트엔드 개발을 하고 있습니다. <br />
                특히 Spring , ReactJS 프레임워크에 익숙 합니다.
              </p>
            </div>
          </div>
          <div className="mib-iw-con-skils int-fonts">
            <div className="mib-iw-con-s">
              <span>Skils</span>
            </div>
            <div className="mib-iw-con-s-w">
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
