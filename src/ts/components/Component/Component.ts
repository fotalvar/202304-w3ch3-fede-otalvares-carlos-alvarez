import { type ComponentStructure } from "../../types/types";

abstract class Component implements ComponentStructure {
  element;

  constructor(parentElement: Element, tagName: string, className: string) {
    this.element = document.createElement(tagName);
    parentElement.appendChild(this.element);
  }
}

export default Component;
