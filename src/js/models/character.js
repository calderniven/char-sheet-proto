"use strict";

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