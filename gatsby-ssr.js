import React from "react"
import { renderToString } from "react-dom/server"
import i18n from "./src/i18n"

import createStore from "./src/state/createStore"

const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => (
  i18n.loadNamespaces(["common"], () => {
    replaceBodyHTMLString(bodyComponent)
  })
)

export default replaceRenderer
