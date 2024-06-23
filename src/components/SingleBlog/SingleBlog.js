import React from 'react';
import './SingleBlog.css';

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
          src="https://upload.wikimedia.org/wikipedia/commons/6/68/Margaret_Hamilton_1995.jpg"
          alt=""
        />
        <div>
          <p className="name">Margaret Hamilton</p>
          <p className="date">8 Mart 2023</p>
        </div>
      </div>
    </div>
  );
}

export default SingleBlog;
