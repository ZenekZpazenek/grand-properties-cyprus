import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header style={{
    height: "100 px",
    backgroundColor: "black",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }}>
    Grand Properties
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
