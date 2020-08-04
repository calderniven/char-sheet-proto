"use strict";

import {$$, $} from "../utilities/Helpers.js"
import { Player } from "../models/Player.js";

export class CharacterBar {
    static getTemplate(name) {
        return `
            <div class="character">
            <a href="">Activate</a>
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
            let template = this.getTemplate(character.characterName);
            console.log(template);
            characterSelect.innerHTML += template;
        }
    }
}