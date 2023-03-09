import React from "react";
import "./Home.css";
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";
import Banner from "../components/Banner/Banner";
import Blog from "../components/Blog/Blog";
import Brand from "../components/Brand/Brand";
import Cities from "../components/Cities/Cities";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Info from "../components/Info/Info";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <BackgroundImage />
      <Brand />
      <img className="axess" src="/images/axess-reklam-44988.jpeg" alt="" />
      <Info />
      <Cities />
      <Blog />
      <Banner />
      <hr />
      <Footer />
    </div>
  );
}

export default Home;
