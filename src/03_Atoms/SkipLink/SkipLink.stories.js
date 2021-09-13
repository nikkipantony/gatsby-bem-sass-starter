/*
 * SkipLink Component Story
 *
 */

import React from "react"
import Component from "./SkipLink"

export default {
    title: "Atoms/Skip Link",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: "Skip link component.",
            },
        },
    },
    argTypes: {
        text: {
            description: "Link text",
            defaultValue: "Skip to main content",
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

export const SkipLink = args => <Component {...args} />
