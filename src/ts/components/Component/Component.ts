import { type ComponentStructure } from "../../types/types";

abstract class Component implements ComponentStructure {
  element;
  className: string;
  renderHtml: () => void;

  constructor(
    element: Element,
    className: string,
    parentElement: Element,
    tagName: string
  ) {
    this.element = document.createElement(tagName);
    parentElement.appendChild(this.element);
  }
}

export default Component;
