export default class Component {
  parentElement = document.querySelector("div#app");
  constructor(templateId) {
    this.templateElement = document.querySelector(`template#${templateId}`);
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.parentElement.appendChild(importedNode);
  }
}
