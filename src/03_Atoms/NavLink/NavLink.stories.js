/*
 * NavLink Component Story
 *
 */

import React from "react"
import Component from "./NavLink"

export default {
    title: "Atoms/Navigation Link",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: "Navigation link component.",
            },
        },
    },
    argTypes: {
        to: {
            description: "Link to destination",
            defaultValue: "/",
        },
        text: {
            description: "Link text",
            defaultValue: "NavLink",
        },
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

export const NavigationLink = args => <Component {...args} />
