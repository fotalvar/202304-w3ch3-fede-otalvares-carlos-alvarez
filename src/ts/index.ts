import { AppComponent } from "./components/AppComponent/AppComponent.js";
import { CardComponent } from "./components/CardComponent/CardComponent.js";
import series from "./series/series.js";
import { type CardStructure } from "./types/types.js";

const appContainer = document.querySelector("body")!;
new AppComponent(appContainer);

const container = document.querySelector(".series");
series.forEach((serie: CardStructure) => new CardComponent(container!, serie));
