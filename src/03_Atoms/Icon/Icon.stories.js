/*
 * Default Icon Stories
 *
 */

import React from "react"
import Icon from "./Icon"

export default {
    title: "Atoms/Icon/Default Icons",
    component: Icon,
}

export const OpenInNew = () => (
    <Icon name="open-in-new" title="link will open in new tab" />
)

export const Home = () => <Icon name="home" title="back to home page" />

export const BurgerMenu = () => <Icon name="burger-menu" title="open menu" />

export const Close = () => <Icon name="close" title="close modal" />

export const Mail = () => <Icon name="mail" title="send email" />

export const MapMarker = () => (
    <Icon name="map-marker" title="point of interest" />
)

export const Accessibility = () => (
    <Icon name="a11y" title="accessibility information" />
)

export const Cookie = () => <Icon name="cookie" title="cookie information" />

export const Privacy = () => (
    <Icon name="privacy-lock" title="privacy information" />
)

export const Message = () => <Icon name="message" title="send message" />
