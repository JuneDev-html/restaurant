import { content } from "../index";
import { listenNav } from "./nav-listener";
import { buildNav } from "./navbar";
import { buildFooter } from "./footer";
import { buildHome } from "./home";

export function loadHome() {
  content.appendChild(buildNav());
  content.appendChild(buildHome());
  content.appendChild(buildFooter());

  listenNav();
}
