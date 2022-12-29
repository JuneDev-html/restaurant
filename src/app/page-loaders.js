import { content } from "../index";
import { listenNav } from "./nav-listener";
import { buildNav } from "./navbar";
import { buildHome } from "./home";

export function loadHome() {
  content.appendChild(buildNav());
  content.appendChild(buildHome());
  listenNav();
  // const header = document.querySelector("header");

  // header.addEventListener("click", (event) => {
  //   const clicked = event.target.innerText;

  //   if (clicked === "HOME") {
  //     content.innerHTML = "";
  //     console.log("home clicked");
  //     loadHome();
  //   }
  // });
}
