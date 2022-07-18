import Components from "../Components.js";
import personajes from "../Characters/personajes.js";
import Card from "./Card/Card.js";

class CardList extends Components {
    index;
    listChild;
    character;

    constructor(parent) {
        super(parent, "ul", "characters-list row list-unstyled");

        this.render();
    }

    newCard() {
        new Card(this.element, this.character, this.index);
    }

    render() {
        personajes.forEach((character) => {
            this.character = character;
            this.newCard();
        });
    }
}

export default CardList;
