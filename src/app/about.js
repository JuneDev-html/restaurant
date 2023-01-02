import { buildElement } from "./build-module";

export const buildAbout = () => {
  const about_main = buildElement("div", null, "about-main");
  const img = buildElement("div", null, "image");
  const haze = buildElement("div", null, "haze");
  const title = buildElement("div", null, "about-title", "A little history");
  const me = buildElement(
    "div",
    null,
    "aboutme",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae odio accusantium iusto. Nemo totam aut harum fuga? Quod dolorem tempore aliquid, possimus non nulla ad ex architecto, est ipsum error. Eligendi harum dignissimos velit vitae, quaerat iusto enim. Nobis animi repudiandae est ipsa libero nam. Ipsum quas officiis magnam nesciunt."
  );

  haze.append(title, me);
  img.append(haze);
  about_main.append(img);

  return about_main;
};
