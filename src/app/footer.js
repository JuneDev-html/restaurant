import { buildElement } from "./build-module";

export const buildFooter = () => {
  const footer = buildElement("footer", null, null);
  const footer_par = buildElement("p", "footer-par", "--Built by JuneDev");
  const git_img = buildElement("img", "git-img", null);
  const git_link = buildElement("a", "logos", null);
  git_link.append(git_img);
  git_link.href = "https://github.com/JuneDev-html";

  const yt_link = buildElement("a", "logos", null);
  const yt_img = buildElement("img", "yt-img", null);
  yt_link.append(yt_img);
  yt_link.href = "https://www.youtube.com/channel/UC8ryMqGJPToOXdwj4IqwE-Q";

  footer.append(footer_par);
  footer.append(git_link);
  footer.append(yt_link);

  return footer;
};
