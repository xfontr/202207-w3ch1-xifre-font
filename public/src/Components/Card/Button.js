import Components from "../../Components.js";

class Button extends Components {
    text;
    type;
    action;

    constructor(parent, text, type, action) {
        super(parent, "button", "character__action btn");

        this.text = text;
        this.type = type;
        this.action = action;

        this.render();
        this.addEventListeners();
    }

    render() {
        this.element.textContent = this.text;
        this.element.type = this.type;
    }

    addEventListeners() {
        this.element.addEventListener("click", this.action);
    }
}

export default Button;
