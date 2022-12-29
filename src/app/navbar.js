import { buildElement } from "./build-module";

export const buildNav = () => {
  const header = buildElement("header", null, null);
  const home = buildElement("div", "home", "HOME");
  const menu = buildElement("div", "menu", "MENU");
  const about = buildElement("div", "about", "ABOUT");

  header.append(home);
  header.append(menu);
  header.append(about);

  return header;
};
