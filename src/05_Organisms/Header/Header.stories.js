/*
 * Header Component Story
 *
 */

import React from "react"
import Component from "./Header"

export default {
    title: "Organisms/Header",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: "Header component.",
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

export const Header = args => <Component {...args} />
