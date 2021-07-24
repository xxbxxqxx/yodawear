import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
//import Img from "gatsby-image";
import SEO from "../components/seo"
import imgLogo from "../images/yoda_logo.png"　//追加

const IndexPage = ({ data, location }) => {

  return (
  <Layout>
    <SEO title="YODAWEAR" />
     <div className="container containerTop containerUnderConstruction">
      <div className="containerUnderConstruction__inner">
        <div>
          <img src={imgLogo} className="mainlogo" />
          <h1>OPENING<br />SOON</h1>
        </div>
        <div>
          <p>YODAWEARは近日公開予定です。<br />今しばらくお待ちください。</p>
        </div>
        <div className="contactBox">
          <h2>E-mail</h2>
          contact@yoda-hair.com
        </div>
       </div>
     </div>
  </Layout>
  );
};
export default IndexPage

