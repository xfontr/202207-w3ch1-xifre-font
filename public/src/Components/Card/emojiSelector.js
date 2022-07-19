import Asesor from "../../Characters/Asesor.js";
import Escudero from "../../Characters/Escudero.js";
import Luchador from "../../Characters/Luchador.js";
import Rey from "../../Characters/Rey.js";

const emojiSelector = (character) => {
    if (character instanceof Rey) {
        return "👑";
    }

    if (character instanceof Luchador) {
        return "🗡";
    }

    if (character instanceof Asesor) {
        return "🎓 ";
    }

    if (character instanceof Escudero) {
        return "🛡";
    }

    return false;
};

export default emojiSelector;
