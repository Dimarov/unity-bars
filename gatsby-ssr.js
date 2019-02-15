import React from "react"
import { renderToString } from "react-dom/server"

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  i18n.loadNamespaces(["common"], () => {
    replaceBodyHTMLString(bodyComponent)
  })
}
