"use strict";

import { Player } from "../../models/Player.js";
import { CharacterList } from "./CharacterList.js";
import { CharacterButton } from "./CharacterButton.js";

export class TerminateButton extends CharacterButton {

    removeAndRerender(event) {
        let { characters, index } = this.getCharacterObject(event);
        if (this.confirmDelete(characters, index)) {
            characters.splice(index, 1);
            CharacterList.render();
        }
    }

    confirmDelete(characters, index) {
        return confirm(`Really delete ${characters[index].characterName}?`);
    }
}
