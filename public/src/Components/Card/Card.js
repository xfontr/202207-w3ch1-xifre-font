import Components from "../../Components.js";
import Button from "./Button.js";

class Card extends Components {
    character;
    container;
    image;
    title;
    list;
    overlayContainer;

    buttonSpeak;
    buttonDie;

    constructor(parent, character) {
        super(parent, "li", "character col");

        this.character = character;

        this.cardImage();

        this.cardTitle();
        this.cardBody();

        this.characterInfoList();
        this.characterOverlay();

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
        return `<div class="card-body">${this.title.outerHTML}</div>`;
    }

    cardTitle() {
        this.title = document.createElement("h2");
        this.title.className = "character__name card-title h4";
        this.title.textContent = `${this.character.nombre} ${this.character.familia}`;
    }

    characterInfo() {
        return `<div class="character__info">${this.list.outerHTML}</div>`;
    }

    characterInfoList() {
        this.list = document.createElement("ul");
        this.list.className = "list-unstyled";

        const age = document.createElement("li");
        age.appendChild(document.createTextNode("Edad: X años"));

        const status = document.createElement("li");
        status.appendChild(document.createTextNode("Estado:"));

        const iconDown = document.createElement("i");
        iconDown.className = "fas fa-thumbs-down";
        status.appendChild(iconDown);

        const iconUp = document.createElement("i");
        iconUp.className = "fas fa-thumbs-up";
        status.appendChild(iconUp);

        this.list.appendChild(age);
        this.list.appendChild(status);
    }

    characterOverlay() {
        this.overlayContainer = document.createElement("div");
        this.overlayContainer.className = "character__overlay";

        const list = document.createElement("ul");
        list.className = "list-unstyled";

        const listElement = document.createElement("li");
        list.appendChild(listElement);

        return this.overlayContainer.outerHTML;
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
        }${this.cardBody()}${this.characterInfo()}${this.characterOverlay()}${this.buttonContainer()}</div>`;
    }
}

export default Card;
