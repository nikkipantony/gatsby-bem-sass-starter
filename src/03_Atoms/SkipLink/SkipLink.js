/*
 * Skip Link Component
 *
 * Reach UI 'skip-nav' component: https://reacttraining.com/reach-ui/skip-nav
 * Used in `src/04_templates/MainLayout` with `import { SkipNavContent } from "@reach/skip-nav"` to target main content
 */

import React from "react"
import PropTypes from "prop-types"
import { SkipNavLink } from "@reach/skip-nav"

const SkipLink = props => {
    return (
        <SkipNavLink className={`skip-link skip-link${props.modifier}`}>
            {props.text}
        </SkipNavLink>
    )
}

SkipLink.defaultProps = {
    text: "Skip navigation, go to main content",
    className: "",
    modifier: "",
}

SkipLink.propTypes = {
    text: PropTypes.string.isRequired,
    modifier: PropTypes.oneOf([""]),
}

export default SkipLink
