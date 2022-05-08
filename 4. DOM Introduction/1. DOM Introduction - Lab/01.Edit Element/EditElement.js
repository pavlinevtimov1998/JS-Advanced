function editElement(element, match, replacer) {
  let text = element.textContent;

  element.textContent = text.split(match).join(replacer);
}
