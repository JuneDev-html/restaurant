import { content } from "..";
import { loadHome, loadMenu, loadAbout } from "./page-loaders";

export const listenNav = () => {
  const header = document.querySelector("header");

  header.addEventListener("click", (event) => {
    const clicked = event.target.innerText;

    if (clicked === "HOME") {
      content.innerHTML = "";
      console.log("home clicked");
      loadHome();
      document.querySelector(".menu-btn").addEventListener("click", () => {
        content.innerHTML = "";
        console.log("menu button clicked");
        loadMenu();
      });
    } else if (clicked === "MENU") {
      content.innerHTML = "";
      console.log("menu clicked");
      loadMenu();
    } else if (clicked === "ABOUT") {
      content.innerHTML = "";
      console.log("about clicked");
      loadAbout();
    }
  });
};
