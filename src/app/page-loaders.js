import { content } from "../index";
import { listenNav } from "./nav-listener";
import { buildNav } from "./navbar";
import { buildFooter } from "./footer";
import { buildHome } from "./home";
import { buildMenu } from "./menu";

export function loadHome() {
  content.append(buildNav(), buildHome(), buildFooter());

  listenNav();
}

export function loadMenu() {
  content.append(buildNav(), buildMenu(), buildFooter());

  listenNav();
}
