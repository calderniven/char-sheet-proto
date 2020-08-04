"use strict";

import { Player } from "./Player.js";
import { CharacterBar } from "../ui/CharacterBar.js";

export class Character {

    constructor(characterName) {
        this.characterName = characterName;
        this.attributes = {
            mind: 1,
            body: 1,
            will: 1,
        }
        this.traits = {
            focus: 1,
            instinct: 1,
            wits: 1,
        }
    }

    static register() {
        let newCharacter = new Character(
            prompt("Name your character:")
        );
        Player.current().characters.push(newCharacter);
        console.log(Player.current().characters);
        CharacterBar.render();
    }

    updateAttribute(attributeName, value) {
        this.attributes[attributeName] = value;
        this.updateTraits();
    }

    updateTraits() {
        this.traits = {
            focus: [this.attributes.mind, this.attributes.body].average().roundUp(),
            instinct: [this.attributes.body, this.attributes.will].average().roundUp(),
            wits: [this.attributes.will, this.attributes.mind].average().roundUp(),
        }
    }
}