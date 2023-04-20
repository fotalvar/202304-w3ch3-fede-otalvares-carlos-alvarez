import series from "../../series/series.js";
import Component from "../Component/Component.js";

const watchedCounter: number = series.filter((serie) => serie.isWatched).length;
const pendingCounter: number = series.filter(
  (serie) => !serie.isWatched
).length;

export class ListComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "section", "list");
    this.renderHtml();
  }

  renderHtml() {
    this.element.innerHTML = `
      <section class="list">
        <h3 class="list__title">Pending series</h3>
        <span class="list__info">You have ${pendingCounter} series pending to watch</span>
        <!--<span class="list__info">Congrats! You've watched all your series</span>-->
        <ul class="series">
        </ul>
      </section>`;
  }
}

export class ListWatchedComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "section", "list");
    this.renderHtml();
  }

  renderHtml() {
    this.element.innerHTML = `
      <section class="watched-list">
        <h3 class="list__title">Watched series</h3>
        <span class="list__info">You have ${watchedCounter} series pending to watch</span>
        <!--<span class="list__info">Congrats! You've watched all your series</span>-->
        <ul class="watched-series series">
        </ul>
      </section>`;
  }
}
