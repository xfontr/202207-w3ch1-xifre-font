import Components from "../../Components.js";

class Card extends Components {
    index;

    character;
    container;
    image;

    constructor(parent, character, index) {
        super(parent, "li", "character col");

        this.character = character;
        this.index = index;
        this.cardImage();
        this.render();
    }

    cardContainer() {
        this.container = document.createElement("div");
        this.container.className = "character col";
        return this.container.innerHTML;
    }

    cardImage() {
        this.image = document.createElement("img");
        this.image.className = "character__picture card-img-top";
        this.image.alt = `${this.character.nombre} ${this.character.familia}`;

        const imageSource = `../img/${this.character.nombre.toLowerCase()}.jpeg`;
        this.image.src = imageSource;
    }

    render() {
        console.log(this.image.outerHTML);
        this.element.innerHTML = `<div>${this.image.outerHTML}</div>`;
    }
}

export default Card;
