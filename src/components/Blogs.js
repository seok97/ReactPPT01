import React from "react"
import "./Blogs.css"

import Testimg from "./Homeimage"

const Blogs = () => {
  return (
    <div className="blogs-com">
      <a className="ac-deco" href="https://befullstack.tistory.com/">
        <div className="bs-c-wrap">
          <div className="bs-c-w-img">
            <Testimg />
          </div>
          <div className="bs-c-w-bloginfo">
            <span>Tistory</span>
            <span>
              이것은 블로그의 설명 정보란 입니다. 블라블라 Lorem .......
            </span>
          </div>
        </div>
      </a>
    </div>
  )
}

export default Blogs
