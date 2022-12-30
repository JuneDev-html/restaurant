import { buildElement } from "./build-module";

export const buildFooter = () => {
  const footer = buildElement("footer");
  const footer_par = buildElement("p", "footer-par", "--Built by JuneDev");
  const git_link = buildElement(
    "a",
    "logos",
    '<img src="./images/logo.png" width="18">'
  );
  git_link.href = "https://github.com/JuneDev-html";

  const yt_link = buildElement(
    "a",
    "logos",
    '<img src="./images/youtube.svg" width="20">'
  );
  yt_link.href = "https://www.youtube.com/channel/UC8ryMqGJPToOXdwj4IqwE-Q";

  footer.append(footer_par);
  footer.append(git_link);
  footer.append(git_link);

  return footer;
};
