import Components from "../Components.js";
import personajes from "../Characters/personajes.js";
import Card from "./Card.js";

class CardList extends Components {
    listChild;

    constructor(parent) {
        super(parent, "ul", "characters-list row list-unstyled");

        this.render();
    }

    newCard() {
        new Card(this.element);
    }

    render() {
        personajes.forEach(() => {
            this.newCard();
        });
    }
}

export default CardList;
