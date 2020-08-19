"use strict";

export class CharacterButton {
    
    getCharacterObject(event) {
        event.preventDefault();
        let characters = Player.current().characters;
        let index = this.getIndex(event);
        return { characters, index };
    }
    
    getIndex(event) {
        let characterDiv = event.target.parentNode;
        let characterList = characterDiv.parentNode;
        let index = $$(".character", characterList).indexOf(characterDiv);
        return index;
    }
}