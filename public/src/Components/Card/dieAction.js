// eslint-disable-next-line import/no-cycle
import Card from "./Card.js";

const createNewCard = (character) => {
    const parent = document.querySelector(".characters-list.row.list-unstyled");
    new Card(parent, character);
};

const dieAction = (character, element) => {
    character.muere();
    element.remove();
    createNewCard(character);
};

export default dieAction;
