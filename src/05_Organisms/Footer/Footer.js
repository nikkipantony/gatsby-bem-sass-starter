/*
 * Footer Component
 *
 * Gatsby useStaticQuery Hook: https://www.gatsbyjs.org/docs/use-static-query
 * Current year using JavaScript / React: https://stackoverflow.com/questions/41293014/new-date-getfullyear-in-react
 * Use target="_blank" with rel="noopener noreferrer" for security: https://mathiasbynens.github.io/rel-noopener
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import ExLink from "../../03_Atoms/ExLink/ExLink"

const Footer = props => {
    const data = useStaticQuery(graphql`
        query FooterSiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <footer className={`footer footer${props.modifier}`}>
            <div className="footer__inner">
                <p className="footer__text">
                    <small>
                        &copy; {new Date().getFullYear()}{" "}
                        {data.site.siteMetadata.title}. Built by{" "}
                        <ExLink
                            to="https://nikkipantony.com"
                            text="Nikki Pantony"
                            modifier="--microcopy"
                        />
                    </small>
                </p>
            </div>
        </footer>
    )
}

Footer.defaultProps = {
    modifier: "",
}

Footer.propTypes = {
    modifier: PropTypes.oneOf([""]),
}

export default Footer
