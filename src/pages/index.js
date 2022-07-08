import React from "react"
//import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
//import Img from "gatsby-image";
import Seo from "../components/seo"
import imgLogo from "../images/yoda_logo.png"
//import { StaticImage } from "gatsby-plugin-image"
//import Slider from "react-slick";

const IndexPage = ({ data, location }) => {

  const slides = [
  {"imgpath":"5_2021_Yoda_Clothes_229.jpg", "order":"7"},
  {"imgpath":"3-1.2021_Yoda_Clothes_202.jpg", "order":"2"},
  //{"imgpath":"2-1.2021_Yoda_Clothes_177.jpg", "order":"1"},
  {"imgpath":"2-1-stripped.jpg", "order":"1"},
  {"imgpath":"7_2021_Yoda_Clothes_248.jpg", "order":"5"},
  {"imgpath":"4_2021_Yoda_Clothes_196.jpg", "order":"4"},
  {"imgpath":"1-2.2021_Yoda_Clothes_214.jpg", "order":"8"},
  {"imgpath":"new-unnamed-modified.jpg", "order":"new"},
  //{"imgpath":"6_2021_Yoda_Clothes_184.jpg", "order":"6"},
  {"imgpath":"6-stripped.jpg", "order":"6"},
  {"imgpath":"3-2_2021_Yoda_Clothes_209.jpg", "order":"3"},
  ]

  return (
  <Layout>
    <Seo title="YODAWEAR" />
    <div className="main-wrapper">
      <div className="main-container">
        <div className="main-img-wrapper">
          {slides && slides.map((n) =>
          <div className="main-img-container">
            <img
              src={"/slide/" + n.imgpath}
              className="slide_img"
              alt="yodawear products"
            />
            <div className="main-img-order">{n.order}</div>
          </div>
          )}
        </div>
        <div className="main-outline-wrapper">
          <img src={imgLogo} className="mainLogo" alt="yodawear logo" />
          <div className="contactBox">
            {/*<p>www.yodawear.com</p>*/}
            <p>contact@yoda-hair.com</p>
            <p>Stresemannstraße 28<br />
            40210 Düsseldorf</p>
          </div>
          <div className="descriptionBox">
            <p>YODA is a fashion brand based in<br />Düsseldorf, Germany.</p>
            <p>
              Steeped in a global mindset<br />
              the brand relised on traditional<br />
              Japanese crafts and materials<br />present
              in all of its pieces,<br />
              Yoda's collections also<br />
              incorporate contemporary<br />
              European designs to create<br />
              a truly international fashion</p>
          </div>
        </div>

      </div>
    </div>
  </Layout>
  );
};
export default IndexPage

