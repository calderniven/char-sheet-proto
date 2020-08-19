"use strict";

import { CharacterList } from "./CharacterList.js";
import { CharacterButton } from "./CharacterButton.js";

export class TerminateButton extends CharacterButton {

    static removeAndRerender(event) {
        event.preventDefault();
        let { characters, index } = TerminateButton.getCharacterObject(event);
        if (TerminateButton.confirmDelete(characters, index)) {
            characters.splice(index, 1);
            CharacterList.render();
        }
    }

    static confirmDelete(characters, index) {
        return confirm(`Really delete ${characters[index].characterName}?`);
    }
}
