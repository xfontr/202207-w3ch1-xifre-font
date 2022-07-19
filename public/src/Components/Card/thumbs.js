const defineAge = (element, character) =>
    element.appendChild(
        document.createTextNode(`Edad: ${character.edad} años`)
    );

const setStatus = (element) =>
    element.appendChild(document.createTextNode("Estado:"));

const defineThumbs = (parent, character) => {
    if (character.vivo) {
        const iconUp = document.createElement("i");
        iconUp.className = "fas fa-thumbs-up";
        parent.appendChild(iconUp);
    } else {
        const iconDown = document.createElement("i");
        iconDown.className = "fas fa-thumbs-down";
        parent.appendChild(iconDown);
    }
};

const thumbs = (parent, character) => {
    const age = document.createElement("li");
    const status = document.createElement("li");

    defineAge(age, character);
    setStatus(status);
    defineThumbs(status, character);

    parent.appendChild(age);
    parent.appendChild(status);

    return parent;
};

export default thumbs;
