import { CardComponent } from "./components/Component/CardComponent/CardComponent.js";
import series from "./series/series.js";
import { type CardStructure } from "./types/types.js";

const container = document.querySelector(".series");
series.forEach((serie: CardStructure) => new CardComponent(container!, serie));
