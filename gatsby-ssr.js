import Backend from "i18next-node-fs-backend";
import { reactI18nextModule } from "react-i18next";

import i18n from "./src/i18n";

i18n
  .use(Backend)
  .use(reactI18nextModule)
  .init({
    preload: ["uk", "en"],
    backend: {
      loadPath: "src/locales/{{lng}}/{{ns}}.json"
    }
  });
export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  i18n.loadNamespaces(["Header"], () => {
    replaceBodyHTMLString(bodyComponent);
  });
};
