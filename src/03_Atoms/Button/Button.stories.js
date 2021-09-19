/*
 * Button Component Story
 *
 */

import React from "react"
import Component from "./Button"
import { jsxDecorator } from "storybook-addon-jsx"

export default {
    title: "Atoms/Button",
    component: Component,
    decorators: [jsxDecorator],
    parameters: {
        docs: {
            description: {
                component: "Button component.",
            },
        },
    },
    argTypes: {
        text: {
            description: "Button text",
            defaultValue: "Button",
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

export const Button = args => <Component {...args} />
