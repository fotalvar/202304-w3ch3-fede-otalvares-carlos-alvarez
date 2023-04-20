import {
  type CardComponentStructure,
  type CardStructure,
} from "../../types/types.js";
import Component from "../Component/Component.js";

export class CardComponent extends Component implements CardComponentStructure {
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
              src="${this.serie.poster}"
              alt="${this.serie.name} poster" />
            <h4 class="serie__title">${this.serie.name}</h4>
            <span class="serie__info">${this.serie.creator} ${this.serie.year}</span>
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
