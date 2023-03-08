import React from "react";
import "./SingleBlog.css";

function SingleBlog({ imageURL, title }) {
  return (
    <div className="singleBlog">
      <div className="singleBlog__top">
        <img src={imageURL} alt="" />
      </div>
      <div className="singleBlog__middle">
        <p>Seyehat Yazıları</p>
        <h3>{title}</h3>
      </div>

      <div className="singleBlog__bottom">
        <img
          src="https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=366&q=80"
          alt=""
        />
        <div>
          <p className="name">Bengüsu Özer</p>
          <p className="date">8 Mart 2023</p>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
