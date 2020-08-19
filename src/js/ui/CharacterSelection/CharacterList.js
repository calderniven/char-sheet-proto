"use strict";

import {$$, $} from "../../utilities/Helpers.js"
import { Player } from "../../models/Player.js";

export class CharacterList {
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
            CharacterList.appendTemplate(character, characterSelect);
        }
        this.addListeners();
    }

    static appendTemplate(character, characterSelect) {
        let template = this.getTemplate(character.characterName);
        characterSelect.innerHTML += template;
    }

    static addListeners() {
        let terminateButtons = $$(".terminate");
        for (const button of terminateButtons) {
            button.onclick = function(event) {
                event.preventDefault();
                let characterDiv = event.target.parentNode;
                let characterList = characterDiv.parentNode;
                let characters = Player.current().characters;
                let index = $$(".character", characterList).indexOf(characterDiv);
                if (confirm(`Really delete ${characters[index].characterName}?`)) {
                    characters.splice(index, 1);
                    CharacterList.render();
                }
            }
        }
    }
}