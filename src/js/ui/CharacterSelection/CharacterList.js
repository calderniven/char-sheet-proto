"use strict";

import {$$, $} from "../../utilities/Helpers.js"
import { Player } from "../../models/Player.js";
import { TerminateButton } from "./TerminateButton.js";
import { ActivateButton } from "./ActivateButton.js";

export class CharacterList {
    static getTemplate(name) {
        return `
            <div class="character">
            <a class="activate" href="">Activate</a>
            <div class="character-name">${name}</div>
            <a class="terminate" href="">Terminate</a>
            </div>
        `;
    }

    static render() {
        let allCharacters = $$(".character");
        for (const characterDiv of allCharacters) {
            characterDiv.remove();
        }
        
        let currentCharacters = Player.current().characters;
        let characterSelect = $(".character-select");
        for (const character of currentCharacters) {
            CharacterList.appendTemplate(character, characterSelect);
        }
        this.addListeners();
    }

    static appendTemplate(character, characterSelect) {
        let template = this.getTemplate(character.characterName);
        characterSelect.innerHTML += template;
    }

    static addListeners() {
        let characterButtons = $$(".terminate, .activate");
        for (const button of characterButtons) {
            if (button.className == "terminate") {
                button.onclick = TerminateButton.removeAndRerender;
            }
            if (button.className == "activate") {
                button.onclick = ActivateButton.activate;
            }
        }
    }
}