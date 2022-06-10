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
  {"imgpath":"3-1.2021_Yoda_Clothes_202.jpg"},
  {"imgpath":"3-2_2021_Yoda_Clothes_209.jpg"},
  {"imgpath":"4_2021_Yoda_Clothes_196.jpg"},
  {"imgpath":"7_2021_Yoda_Clothes_248.jpg"},
  {"imgpath":"6_2021_Yoda_Clothes_184.jpg"},
  {"imgpath":"5_2021_Yoda_Clothes_229.jpg"},
  {"imgpath":"1-2.2021_Yoda_Clothes_214.jpg"},
  {"imgpath":"2-1.2021_Yoda_Clothes_177.jpg"}
  ]

  return (
  <Layout>
    <SEO title="YODAWEAR" />
     <div className="container containerTop containerUnderConstruction">
      <div className="containerTop__inner flex-row">
        <div className="flex-column-6 containerTop__columnleft">
          <img src={imgLogo} className="mainlogo" />
          <div className="soidfja8">
            {/*<p>YODAWEARは近日公開予定です。<br />今しばらくお待ちください。</p>*/}
            <p>YODA is a fashion brand based in<br />Düsseldorf, Germany.</p>
            <p>
              Steeped in a global mindset the brand<br />
              relised on traditional Japanese crafts and materials<br />
              presetnt in all of its pieces,<br />
              Yoda's collections also incorporate<br />
              contemporary European designs to create<br />
              a truly international fashion</p>
          </div>

          <div className="contactBox">
            <p>www.yodawear.com</p>
            <p>contact@yoda-hair.com</p>
          </div>
        </div>
        <div className="flex-column-6 containerTop__columnright">
          <div className="mainImageFashion">
            {/*<StaticImage src="../images/2021_Yoda_Clothes_65.png" alt="A kitten" />*/}
            <Slider {...settings}>
              {slides && slides.map((n) =>
              <div className="slide_wrapper">
                <div className="slide_content">
                  <img
                    src={"/slide/" + n.imgpath}
                    className="slide_img"
                  />
                </div>
              </div>
              )}
            </Slider>

            <div className="photographer_caption">
              <p>Photography by Juergen Staack</p>
            </div>
          </div>
        </div>
      </div>
      {/*}
      <div className="containerUnderConstruction__inner">
        <div>
          <img src={imgLogo} className="mainlogo" />
        </div>
        <div className="mainImageFashion">
          <Slider {...settings}>
            {slides && slides.map((n) =>
            <div className="slide_wrapper">
              <div className="slide_content">
                <img
                  src={"/slide/" + n.imgpath}
                  className="slide_img"
                />
                <p></p>
              </div>
            </div>
            )}
          </Slider>
        </div>
        <div className="soidfja8">
          <p>YODA is a fashion brand based in<br />Düsseldorf, Germany.</p>
          <p>
            Steeped in a global mindset the brand<br />
            relised on traditional Japanese crafts and materials<br />
            presetnt in all of its pieces,<br />
            Yoda's collections also incorporate<br />
            contemporary European designs to create<br />
            a truly international fashion</p>
        </div>
        <div className="contactBox">
          <p>www.yodawear.com</p>
          <p>contact@yoda-hair.com</p>
        </div>
       </div>
       */}
     </div>
  </Layout>
  );
};
export default IndexPage

