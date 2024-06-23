import React from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';
import './Blog.css';

function Blog() {
  return (
    <div className="blog">
      <div className="blog__left">
        <div className="blog__left-top">
          <h1>Popüler Seyahat Galerileri</h1>
          <button className="see-btn">Tümünü gör</button>
        </div>
        <div className="blog__left-bottom">
          <SingleBlog
            imageURL="/images/catalca.jpeg"
            title="Çatalca'nın EN güzel piknik alanı"
          />
          <SingleBlog
            imageURL="/images/evjpeg.jpeg"
            title="Ev aldığında oturma izni veren ülkeler"
          />
          <SingleBlog
            imageURL="/images/girne.jpeg"
            title="Türkiye'den sadece kimlikle gidilebilecek ülkeler"
          />
          <SingleBlog
            imageURL="/images/seyahatsever.jpeg"
            title="Gençlik ve Spor Bakanlığı'nın Seyahatsever Projesi hakkında bilgiler"
          />
        </div>
      </div>
      <div className="blog__right">
        <h2>Uzman Yazıları</h2>
        {[...Array(4)].map((_, index) => (
          <div className="blog__right-item">
            <div className="title">
              <h3>Çatalca'daki piknik alanları</h3>
            </div>
            <div className="desc">
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
        ))}

        <button className="blog__right-btn">Tümünü gör</button>
      </div>
    </div>
  );
}

export default Blog;
