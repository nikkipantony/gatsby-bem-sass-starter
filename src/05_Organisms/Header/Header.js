/*
 * Header Component
 *
 * Gatsby useStaticQuery Hook: https://www.gatsbyjs.org/docs/use-static-query
 * Gatsby Link API: https://www.gatsbyjs.org/docs/gatsby-link
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import InLink from "../../03_Atoms/InLink/InLink"
import MenuMobile from "../../04_Molecules/MenuMobile/MenuMobile"
import MenuDesktop from "../../04_Molecules/MenuDesktop/MenuDesktop"

const Header = props => {
    const data = useStaticQuery(graphql`
        query HeaderSiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <header className={`header header${props.modifier}`}>
            <div className="header__inner">
                <div className="header__title">
                    <InLink
                        className="header__title-link"
                        to="/"
                        text={data.site.siteMetadata.title}
                    />
                </div>
                <nav className="header__navigation">
                    <MenuDesktop />
                    <MenuMobile />
                </nav>
            </div>
        </header>
    )
}

Header.defaultProps = {
    modifier: "",
}

Header.propTypes = {
    modifier: PropTypes.oneOf([""]),
}

export default Header
