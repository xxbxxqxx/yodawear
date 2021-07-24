import React from "react"
import PropTypes from "prop-types"
//import { graphql } from "gatsby"

import "./style/common.scss"

const Layout = ({ children }) => {

  return (
    <>
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
