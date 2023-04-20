import Component from "../Component/Component.js";

export class ListComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "section", "list");
    this.renderHtml();
  }

  renderHtml() {
    this.element.innerHTML = `
      <section class="list">
        <h3 class="list__title">Pending series</h3>
        <span class="list__info">You have 5 series pending to watch</span>
        <!--<span class="list__info">Congrats! You've watched all your series</span>-->
        <ul class="series">
        </ul>
      </section>`;
  }
}
