"use strict";

import { CharacterButton } from "./CharacterButton.js";
import { Player } from "../../models/Player.js";

export class ActivateButton extends CharacterButton {
    static activate(event) {
        event.preventDefault();
        let character = ActivateButton.getCharacterObject(event);
        let player = Player.current();
        player.activeCharacter = character.index;
        //todo: update UI
    }
}