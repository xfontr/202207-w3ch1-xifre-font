import Components from "../Components.js";
import personajes from "../Characters/personajes.js";

class CardList extends Components {
    listChild;

    constructor(parent) {
        super(parent, "ul", "characters-list row list-unstyled");

        this.render();
    }

    listChildren() {
        this.listChild = document.createElement("li");
        this.listChild.className = "character col";
    }

    render() {
        personajes.forEach(() => {
            this.listChildren();
            this.element.appendChild(this.listChild);
        });
    }
}

export default CardList;
