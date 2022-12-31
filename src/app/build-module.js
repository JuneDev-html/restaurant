export const buildElement = (el_type, id_name, class_name, content) => {
  const element = document.createElement(el_type);
  if (id_name) element.id = id_name;
  if (class_name) element.classList.add(class_name);
  if (content) element.innerText = content;

  return element;
};
