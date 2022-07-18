import Components from "../Components.js";

class Card extends Components {
    container;

    constructor(parent) {
        super(parent, "li", "character col");

        this.cardContainer();

        this.render();
    }

    cardContainer() {
        this.container = document.createElement("div");
        this.container.className = "card character__card";
    }

    render() {
        this.element.appendChild(this.container);
    }
}

export default Card;
