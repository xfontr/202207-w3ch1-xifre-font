import App from "./Components/App.js";
import CardList from "./Components/CardList.js";
import Communication from "./Components/Communication/Communication.js";

new App(document.body);

const app = document.querySelector(".app.container");

new CardList(app);
new Communication(app);
