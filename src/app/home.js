import { buildElement } from "./build-module";

const buildBanner = () => {
  const main = buildElement("main");
  const hero_wrapper = buildElement("div", "hero-wrapper");
  const hero = buildElement("div", "hero");
  const title_wrap = buildElement("div", "title-wrap");
  const title = buildElement("p", null, "Espress Yourself");

  title_wrap.appendChild(title);
  hero.appendChild(title_wrap);
  hero_wrapper.appendChild(hero);
  main.appendChild(hero_wrapper);

  return hero_wrapper;
};

const buildBody = () => {
  const body = buildElement("div", "home-body");
  const albanian = buildElement("div", "albanian-welcome", "Mirëseardhje");
  const english = buildElement(
    "div",
    "english-welcome",
    "WELCOME TO ESPRESS YOURSELF"
  );
  const border = buildElement("hr", "short-border");
  const blurb = buildElement(
    "div",
    "blurb",
    "Central MA's home of traditional european espresso"
  );
  const btn = buildElement("button", "menu-btn", "MENU");

  body.append(albanian);
  body.append(english);
  body.append(border);
  body.append(blurb);
  body.append(btn);

  return body;
};

const buildHome = () => {
  const main = buildElement("main");

  main.append(buildBanner());
  main.append(buildBody());

  return main;
};

export { buildHome };
