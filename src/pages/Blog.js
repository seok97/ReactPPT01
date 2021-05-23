import React from "react"

// css
import "./Blog.css"

// blog list component
import Blogs from "../components/Blogs"

const Blog = () => {
  return (
    <section className="Blog">
      <div className="blog-wrapper">
        <Blogs />
        <Blogs />
        <Blogs />
      </div>
    </section>
  )
}

export default Blog
