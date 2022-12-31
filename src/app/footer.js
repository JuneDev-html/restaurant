import { buildElement } from "./build-module";

export const buildFooter = () => {
  const footer = buildElement("footer", null, null, null);
  const footer_par = buildElement(
    "p",
    null,
    "footer-par",
    "--Built by JuneDev"
  );
  const git_img = buildElement("img", null, "git-img", null);
  const git_link = buildElement("a", null, "logos", null);
  git_link.append(git_img);
  git_link.href = "https://github.com/JuneDev-html";

  const yt_link = buildElement("a", null, "logos", null);
  const yt_img = buildElement("img", null, "yt-img", null);
  yt_link.append(yt_img);
  yt_link.href = "https://www.youtube.com/channel/UC8ryMqGJPToOXdwj4IqwE-Q";

  footer.append(footer_par, git_link, yt_link);

  return footer;
};
