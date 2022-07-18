import Card from "../Card.js";

class CardBody extends Card {
    constructor(parent) {
        super(parent, "div", "card character__card");
    }

    // cardImage() {
    //     this.image = document.createElement("img");
    //     this.image.className = "character__picture card-img-top";
    //     this.image.alt = `${this.character.name} ${this.character.family}`;

    //     const imageSource = `../img/${this.character.nombre.toLowerCase()}.jpeg`;
    //     this.image.src = imageSource;
    // }

    // render() {
    //     // this.element.appendChild(this.container);
    //     this.element.appendChild(this.image);
    // }
}

export default CardBody;
