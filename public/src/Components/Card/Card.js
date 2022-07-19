import Components from "../../Components.js";
import Button from "./Button.js";
import createList from "./characterData.js";

class Card extends Components {
    character;
    mainContainer;

    image;

    cardBody;
    title;

    characterInfoContainer;
    infoList;

    dataList;
    overlayContainer;

    buttonSpeak;
    buttonDie;

    constructor(parent, character) {
        super(parent, "li", "character col");

        this.character = character;

        this.createMainContainer();
        this.createImage();

        this.createCardBody();
        this.createCardTitle();

        this.createInfoContainer();
        this.createInfoList();

        this.createOverlay();

        this.generateButtons();
        this.buttonContainer();

        this.render();
    }

    createMainContainer() {
        this.mainContainer = document.createElement("div");
        this.mainContainer.className = "card character__card";
    }

    createImage() {
        this.image = document.createElement("img");
        this.image.className = "character__picture card-img-top";
        this.image.alt = `${this.character.nombre} ${this.character.familia}`;

        const imageSource = `../img/${this.character.nombre.toLowerCase()}.jpeg`;
        this.image.src = imageSource;

        if (!this.character.vivo) {
            this.image.style = "transform: rotateX(180deg)";
        }
    }

    createCardBody() {
        this.cardBody = document.createElement("div");
        this.cardBody.className = "card-body";
    }

    createCardTitle() {
        this.title = document.createElement("h2");
        this.title.className = "character__name card-title h4";
        this.title.textContent = `${this.character.nombre} ${this.character.familia}`;
    }

    createInfoContainer() {
        this.characterInfoContainer = document.createElement("div");
        this.characterInfoContainer.className = "character__info";
    }

    createInfoList() {
        this.infoList = document.createElement("ul");
        this.infoList.className = "list-unstyled";

        const age = document.createElement("li");
        age.appendChild(
            document.createTextNode(`Edad: ${this.character.edad}`)
        );

        const status = document.createElement("li");
        status.appendChild(document.createTextNode("Estado:"));

        const iconDown = document.createElement("i");
        iconDown.className = "fas fa-thumbs-down";
        status.appendChild(iconDown);

        const iconUp = document.createElement("i");
        iconUp.className = "fas fa-thumbs-up";
        status.appendChild(iconUp);

        this.infoList.appendChild(age);
        this.infoList.appendChild(status);
    }

    createOverlay() {
        this.overlayContainer = document.createElement("div");
        this.overlayContainer.className = "character__overlay";

        this.dataList = document.createElement("ul");
        this.dataList.className = "list-unstyled";

        createList(this.character).forEach((listElement) => {
            this.dataList.appendChild(listElement);
        });
    }

    buttonContainer() {
        return `<div class="character__action btn">${this.buttonSpeak.element.outerHTML}${this.buttonDie.element.outerHTML}</div>`;
    }

    generateButtons() {
        this.buttonSpeak = new Button(false, "habla", "button", () => {
            this.character.comunicar();
        });

        this.buttonDie = new Button(false, "muere", "button", () => {
            this.character.muere();
        });
    }

    renderCardBody() {
        this.cardBody.appendChild(this.title);
        this.characterInfoContainer.appendChild(this.infoList);
        this.cardBody.appendChild(this.characterInfoContainer);

        this.overlayContainer.appendChild(this.dataList);
        this.cardBody.appendChild(this.overlayContainer);
    }

    render() {
        this.mainContainer.appendChild(this.image);
        this.renderCardBody();
        this.mainContainer.appendChild(this.cardBody);
        this.element.appendChild(this.mainContainer);
    }
}

export default Card;
