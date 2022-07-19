import Rey from "../../Characters/Rey.js";
import Luchador from "../../Characters/Luchador.js";
import Escudero from "../../Characters/Escudero.js";
import Asesor from "../../Characters/Asesor.js";

const includedData = ["edad", "nombre", "familia", "serie", "vivo"];

const characterData = (character) => ({
    rey: [`Años de reinado: ${character.anyosReinado}`],
    luchador: [`Arma: ${character.arma}`, `Destreza: ${character.destreza}`],
    asesor: [`Asesora a: ${character.asesorado}`],
    escudero: [
        `Peloteo: ${character.pelotismo}`,
        `Sirve a: ${character.sirveA}`,
    ],
});

const getCharacterData = (data, character) => {
    if (!includedData.includes(data)) {
        if (character instanceof Rey) {
            return characterData(character).rey;
        }
        if (character instanceof Luchador) {
            return characterData(character).luchador;
        }
        if (character instanceof Escudero) {
            return characterData(character).escudero;
        }
        if (character instanceof Asesor) {
            return characterData(character).asesor;
        }
    }
    return false;
};

const createList = (character) => {
    let listElement;
    const elementList = [];

    Object.keys(character).forEach((data) => {
        if (getCharacterData(data, character)) {
            listElement = document.createElement("li");
            listElement.textContent = getCharacterData(data, character);
            elementList.push(listElement);
        }
    });

    return elementList;
};

export default createList;
