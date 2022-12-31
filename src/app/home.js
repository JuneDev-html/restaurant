import { buildElement } from "./build-module";

const buildBanner = () => {
  const main = buildElement("main");
  const hero_wrapper = buildElement("div", null, "hero-wrapper");
  const hero = buildElement("div", null, "hero");
  const title_wrap = buildElement("div", null, "title-wrap");
  const title = buildElement("p", null, null, "Espress Yourself");

  title_wrap.appendChild(title);
  hero.appendChild(title_wrap);
  hero_wrapper.appendChild(hero);
  main.appendChild(hero_wrapper);

  return hero_wrapper;
};

const buildBody = () => {
  const body = buildElement("div", null, "home-body");
  const albanian = buildElement(
    "div",
    null,
    "albanian-welcome",
    "Mirëseardhje"
  );
  const english = buildElement(
    "div",
    null,
    "english-welcome",
    "WELCOME TO ESPRESS YOURSELF"
  );
  const border = buildElement("hr", "short-border");
  const blurb = buildElement(
    "div",
    null,
    "blurb",
    "Central MA's home of traditional european espresso"
  );
  const btn = buildElement("button", null, "menu-btn", "MENU");

  body.append(albanian, english, border, blurb, btn);

  return body;
};

const buildHome = () => {
  const main = buildElement("main");

  main.append(buildBanner(), buildBody());

  return main;
};

export { buildHome };
