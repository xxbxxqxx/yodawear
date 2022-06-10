import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
//import Img from "gatsby-image";
import SEO from "../components/seo"
import imgLogo from "../images/yoda_logo.png"　//追加
import { StaticImage } from "gatsby-plugin-image"
import Slider from "react-slick";

const IndexPage = ({ data, location }) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const slides = [
  {"imgpath":"2-1.2021_Yoda_Clothes_177.jpg"},
  {"imgpath":"3-1.2021_Yoda_Clothes_202.jpg"},
  {"imgpath":"3-2_2021_Yoda_Clothes_209.jpg"},
  {"imgpath":"4_2021_Yoda_Clothes_196.jpg"},
  {"imgpath":"7_2021_Yoda_Clothes_248.jpg"},
  {"imgpath":"6_2021_Yoda_Clothes_184.jpg"},
  {"imgpath":"5_2021_Yoda_Clothes_229.jpg"},
  {"imgpath":"1-2.2021_Yoda_Clothes_214.jpg"},
  ]

  return (
  <Layout>
    <SEO title="YODAWEAR" />
    <div className="main-wrapper">
      <div className="main-container">
        <div className="main-img-wrapper">
          {slides && slides.map((n) =>
          <div className="main-img-container">
            <img
              src={"/slide/" + n.imgpath}
              className="slide_img"
            />
          </div>
          )}
        </div>
        <div className="main-outline-wrapper">
          <img src={imgLogo} className="mainLogo" />
          <div className="contactBox">
            <p>www.yodawear.com</p>
            <p>contact@yoda-hair.com</p>
          </div>
          <div className="descriptionBox">
            <p>YODA is a fashion brand based in<br />Düsseldorf, Germany.</p>
            <p>
              Steeped in a global mindset the brand relised<br />
              on traditional Japanese crafts and materials present in all of its pieces,<br />
              Yoda's collections also incorporate contemporary European designs<br />
              to create a truly international fashion</p>
          </div>
        </div>

      </div>
    </div>
  </Layout>
  );
};
export default IndexPage

