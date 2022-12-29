import { loadHome } from "./page-loaders";

export const listenNav = () => {
  const header = document.querySelector("header");

  header.addEventListener("click", (event) => {
    const clicked = event.target.innerText;

    if (clicked === "HOME") {
      content.innerHTML = "";
      console.log("home clicked");
      loadHome();
    }
  });
};
