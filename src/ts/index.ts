import { CardComponent } from "./components/Component/CardComponent/CardComponent.js";
import series from "./series/series.js";

const container = document.querySelector(".series");
series.forEach((serie) => new CardComponent(container!, serie));
