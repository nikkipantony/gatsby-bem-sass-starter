/*
 * Footer Component Story
 *
 */

import React from "react"
import Component from "./Footer"

export default {
    title: "Organisms/Footer",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: "Footer component.",
            },
        },
    },
    argTypes: {
        modifier: {
            description: "Modifier options",
            control: {
                type: "select",
                labels: {
                    "": "no modifier",
                },
            },
        },
    },
}

export const Footer = args => <Component {...args} />
