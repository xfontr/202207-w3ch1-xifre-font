import Components from "../../Components.js";
import Button from "../Button.js";
import createList from "./characterData.js";
import comunicateAction from "./comunicateAction.js";
// eslint-disable-next-line import/no-cycle
import dieAction from "./dieAction.js";
import emojiSelector from "./emojiSelector.js";
import thumbs from "./thumbs.js";

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

    buttonContainer;
    buttonSpeak;
    buttonDie;

    emoji;

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

        this.createButtonContainer();
        this.createButtons();

        this.createEmoji();

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

        this.infoList = thumbs(this.infoList, this.character);
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

    createButtonContainer() {
        this.buttonContainer = document.createElement("div");
        this.buttonContainer.className = "character__action btn";
    }

    createButtons() {
        this.buttonSpeak = new Button(
            this.buttonContainer,
            "habla",
            "button",
            () => {
                comunicateAction(this.character);
            }
        );

        this.buttonDie = new Button(
            this.buttonContainer,
            "muere",
            "button",
            () => {
                dieAction(this.character, this.element);
            }
        );
    }

    createEmoji() {
        this.emoji = document.createElement("i");
        this.emoji.className = "emoji";
        this.emoji.textContent = emojiSelector(this.character);
    }

    renderCardBody() {
        this.cardBody.appendChild(this.title);
        this.characterInfoContainer.appendChild(this.infoList);
        this.cardBody.appendChild(this.characterInfoContainer);

        this.overlayContainer.appendChild(this.dataList);
        this.overlayContainer.appendChild(this.buttonContainer);

        this.cardBody.appendChild(this.overlayContainer);
    }

    render() {
        this.mainContainer.appendChild(this.image);

        this.renderCardBody();

        this.mainContainer.appendChild(this.cardBody);
        this.mainContainer.appendChild(this.emoji);

        this.element.appendChild(this.mainContainer);
    }
}

export default Card;
