import { AppComponent } from "./components/AppComponent/AppComponent.js";
import { CardComponent } from "./components/CardComponent/CardComponent.js";
import {
  ListComponent,
  ListWatchedComponent,
} from "./components/ListComponent/ListComponent.js";
import series from "./series/series.js";
import { type CardStructure } from "./types/types.js";

const appContainer = document.querySelector("body")!;
new AppComponent(appContainer);

const sectionList = document.querySelector("h2")!;
new ListComponent(sectionList);

const container = document.querySelector(".series");
series.forEach((serie: CardStructure) => new CardComponent(container!, serie));

const sectionListWatched = document.querySelector("h2")!;
new ListWatchedComponent(sectionListWatched);

const watchedList = document.querySelector(".watched-series");
series.forEach((serie: CardStructure) => {
  if (serie.isWatched) {
    new CardComponent(watchedList!, serie);
  }
});
