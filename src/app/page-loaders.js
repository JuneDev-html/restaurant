import { content } from "../index";
import { listenNav } from "./nav-listener";
import { buildNav } from "./navbar";
import { buildHome } from "./home";

export function loadHome() {
  content.appendChild(buildNav());
  content.appendChild(buildHome());
  listenNav();
}
