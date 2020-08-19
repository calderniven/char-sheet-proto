"use strict";

import { Player } from "../../models/Player.js";
import { $$ } from "../../utilities/Helpers.js";

export class CharacterButton {
    
    static getCharacterObject(event) {
        let characters = Player.current().characters;
        let index = CharacterButton.getIndex(event);
        return { characters, index };
    }

    static getIndex(event) {
        let characterDiv = event.target.parentNode;
        let characterList = characterDiv.parentNode;
        let index = $$(".character", characterList).indexOf(characterDiv);
        return index;
    }
}