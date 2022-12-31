import { buildElement } from "./build-module";

const buildPage = () => {
  const main = buildElement("main", null, "menu-main");
  const menu_side = buildElement("div", null, "menu-side");
  const welcome = buildElement("div", null, "menu-welcome", "Mirëseardhje");
  const title = buildElement("div", null, "menu-title", "MENU");
  const banner_side = buildElement("div", null, "banner-side");
  const smoke = buildElement("div");

  banner_side.append(smoke);
  menu_side.append(welcome, title, buildBlockOne(), buildBlockTwo());
  main.append(menu_side, banner_side);

  return main;
};

const buildBlockOne = () => {
  const block = buildElement("div", null, "menu-block");
  const drink = buildElement("div", null, "item-type", "DRINK");

  const legend = buildElement("div", "legend", "item-block");
  const legendD = buildElement("div", null, "item", "drink");
  const legendS = buildElement("div", null, "spacer");
  const legendP = buildElement("div", null, "pricing", "sgl / dbl / trpl");
  legend.append(legendD, legendS, legendP);

  const espresso = buildElement("div", null, "item-block");
  const espressoD = buildElement("div", null, "item", "espresso");
  const espressoS = buildElement("div", null, "spacer");
  const espressoP = buildElement("div", null, "pricing", "2.08 / 2.56 / 3.08");
  espresso.append(espressoD, espressoS, espressoP);

  const mach = buildElement("div", null, "item-block");
  const machD = buildElement("div", null, "item", "macchiato");
  const machS = buildElement("div", null, "spacer");
  const machP = buildElement("div", null, "pricing", "2.30 / 2.95 / 3.45");
  mach.append(machD, machS, machP);

  const latt = buildElement("div", null, "item-block");
  const lattD = buildElement("div", null, "item", "latte");
  const lattS = buildElement("div", null, "spacer");
  const lattP = buildElement("div", null, "pricing", "2.60 / 3.20 / 3.95");
  latt.append(lattD, lattS, lattP);

  block.append(drink, legend, espresso, mach, latt);

  return block;
};

const buildBlockTwo = () => {
  const block = buildElement("div", null, "menu-block");
  const drink = buildElement("div", "food", "item-type", "FOOD");

  const crois = buildElement("div", null, "item-block");
  const croisF = buildElement("div", null, "item", "croissant");
  const croisS = buildElement("div", null, "spacer");
  const croisP = buildElement("div", null, "pricing", "2.50");
  crois.append(croisF, croisS, croisP);

  const pie = buildElement("div", null, "item-block");
  const pieF = buildElement("div", null, "item", "spinach pie");
  const pieS = buildElement("div", null, "spacer");
  const pieP = buildElement("div", null, "pricing", "2.99");
  pie.append(pieF, pieS, pieP);

  const sand = buildElement("div", null, "item-block");
  const sandF = buildElement("div", null, "item", "sandwich");
  const sandS = buildElement("div", null, "spacer");
  const sandP = buildElement("div", null, "pricing", "4.99");
  sand.append(sandF, sandS, sandP);

  block.append(drink, crois, pie, sand);

  return block;
};

export { buildPage as buildMenu };
