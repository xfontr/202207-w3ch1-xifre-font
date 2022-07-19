import Components from "../../Components.js";

class Communications extends Components {
    character;
    paragraph;
    image;

    constructor(parent, character) {
        super(parent, "div", "comunications");

        this.character = character;

        this.createParagraph();
        this.createImage();

        this.render();
    }

    createParagraph() {
        this.paragraph = document.createElement("p");
        this.paragraph.className = "comunications__text display-1";
        this.paragraph.textContent = "Una frase que dice alguien";
    }

    createImage() {
        this.image = document.createElement("img");
        this.image.className = "comunications__picture";
        this.image.src = "../../img/no-one.jpeg";
        this.image.alt = "Nombre y familia del que habla";
    }

    render() {
        this.element.appendChild(this.paragraph);
        this.element.appendChild(this.image);
    }
}

export default Communications;
