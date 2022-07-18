class Components {
    element;

    constructor(parent, tag, className) {
        this.element = document.createElement(tag);
        this.element.className = className;

        if (parent) {
            parent.appendChild(this.element);
        }
    }
}

export default Components;
