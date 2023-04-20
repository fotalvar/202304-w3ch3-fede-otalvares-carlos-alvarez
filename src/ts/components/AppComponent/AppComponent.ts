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
    <main class="main-content">
      <h2 class="main-content__title">Series list</h2>
      <section class="list">
        <h3 class="list__title">Pending series</h3>
        <span class="list__info">You have 5 series pending to watch</span>
        <!--<span class="list__info">Congrats! You've watched all your series</span>-->
        <ul class="series">
        </ul>
      </section>
    </main>
    `;
  }
}
