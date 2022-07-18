import Components from "../../Components.js";
import Button from "./Button.js";

class Card extends Components {
    character;
    container;
    image;

    buttonSpeak;
    buttonDie;

    constructor(parent, character) {
        super(parent, "li", "character col");

        this.character = character;

        this.cardImage();
        this.cardBody();
        this.generateButtons();
        this.buttonContainer();
        this.render();
    }

    cardImage() {
        this.image = document.createElement("img");
        this.image.className = "character__picture card-img-top";
        this.image.alt = `${this.character.nombre} ${this.character.familia}`;

        const imageSource = `../img/${this.character.nombre.toLowerCase()}.jpeg`;
        this.image.src = imageSource;
    }

    cardBody() {
        return `<div class="card-body">`;
    }

    buttonContainer() {
        return `<div class="character__action btn">${this.buttonSpeak.element.outerHTML}${this.buttonDie.element.outerHTML}</div>`;
    }

    generateButtons() {
        this.buttonSpeak = new Button(false, "habla", "button", () => {
            console.log("");
        });

        this.buttonDie = new Button(false, "muere", "button", () => {
            console.log("");
        });
    }

    render() {
        this.element.innerHTML = `<div class="card character__card">${
            this.image.outerHTML
        }${this.buttonContainer()}</div>`;
    }
}

export default Card;
