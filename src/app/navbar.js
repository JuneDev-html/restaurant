import { buildElement } from "./build-module";

export const buildNav = () => {
  const header = buildElement("header", null, null, null);
  const home = buildElement("div", null, "home", "HOME");
  const menu = buildElement("div", null, "menu", "MENU");
  const about = buildElement("div", null, "about", "ABOUT");

  header.append(home, menu, about);

  return header;
};
