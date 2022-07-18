import App from "./Components/App.js";
import CardList from "./Components/CardList.js";

new App(document.body);

const app = document.querySelector(".app.container");

new CardList(app);
