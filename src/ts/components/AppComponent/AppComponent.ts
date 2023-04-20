import Component from "../Component/Component.js";

export class AppComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "div", "container");
    this.renderHtml();
  }

  renderHtml() {
    this.element.innerHTML = `
        <header class="main-header">
      <h1 class="main-title">My Series</h1>
    </header>
    `;
  }
}
