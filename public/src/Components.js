class Components {
    element;

    constructor(parent, tag, className) {
        this.element = document.createElement(tag);
        this.element.className = className;

        parent.appendChild(this.element);
    }
}

export default Components;
