/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"
import Menu from "./menu.js"
import {bdy,cont} from "./menu.module.css"

const Layout = ({ children }) => {
  return (
    <>
         <body className={bdy}>
      <Header siteTitle='Matte' />
      <Menu/>
      <div className={cont}>{children}</div>
     </body>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
