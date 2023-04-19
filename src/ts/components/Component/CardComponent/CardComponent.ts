import { type CardStructure } from "../../../types/types.js";
import Component from "../Component.js";

export class CardComponent extends Component {
  serie: CardStructure;

  constructor(parentElement: Element, serie: CardStructure) {
    super(parentElement, "li", "serie");
    this.serie = serie;
    this.renderHtml();
  }

  renderHtml() {
    this.element.innerHTML = `
          <li class="serie">
            <img class="serie__poster"
              src="https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg"
              alt="The Sopranos poster" />
            <h4 class="serie__title">The Sopranos</h4>
            <span class="serie__info">David Chase (1999)</span>
            <ul class="score">
              <li class="score__star">
                <button><i class="icon icon--score far fa-star" title="1/5"></i></button>
              </li>
              <li class="score__star">
                <button><i class="icon icon--score far fa-star" title="2/5"></i></button>
              </li>
              <li class="score__star">
                <button><i class="icon icon--score far fa-star" title="3/5"></i></button>
              </li>
              <li class="score__star">
                <button><i class="icon icon--score far fa-star" title="4/5"></i></button>
              </li>
              <li class="score__star">
                <button><i class="icon icon--score far fa-star" title="5/5"></i></button>
              </li>
            </ul>
            <button><i class="icon icon--delete fas fa-times-circle"></i></button>
          </li>`;
  }
}
