/*
 * Button Component Story
 *
 */

import React from "react"
import Component from "./Button"

export default {
    title: "Atoms/Button",
    component: Component,
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
        },
        modifier: {
            description: "Modifier options",
        },
        // Custom Line: {
        //     description: "Overwritten description",
        //     table: {
        //         type: {
        //             summary: "Something short",
        //             detail: "Something really really long",
        //         },
        //     },
        //     control: {
        //         type: null,
        //     },
        // },
    },
}

export const Button = args => <Component {...args} />
Button.args = {
    text: "Ally Button",
    modifier: "",
}
