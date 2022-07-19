const selectors = {
    container() {
        return document.querySelector(".comunications");
    },
    paragraph() {
        return document.querySelector(".comunications__text.display-1");
    },
    image() {
        return document.querySelector(".comunications__picture");
    },
};

const setImage = (character) => {
    const imageSource = `../img/${character.nombre.toLowerCase()}.jpeg`;
    selectors.image().src = imageSource;
    selectors.image().alt = `${character.nombre} ${character.familia}`;
};

const containerAnimation = () => {
    selectors.container().className = "comunications on";

    setTimeout(() => {
        selectors.container().className = "comunications";
    }, 2000);
};

const comunicateAction = (character) => {
    selectors.paragraph().textContent = character.comunicar();
    setImage(character);
    containerAnimation();
};

export default comunicateAction;
