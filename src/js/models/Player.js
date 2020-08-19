"use strict";

export class Player {

    constructor(playerName) {
        this.playerName = playerName;
        this.characters = [];
        this.id = null;
        this.activeCharacter = null;
    }

    /** @return {Player} */
    static current() {
        return window.player;
    }

    static fakePlayer(name = "Imposter") {
        let prefixes = ["Mr.", "Ms.", "Dr.", "Lord", "Count"];
        return new Player(`${prefixes.random()} ${name}`);
    }

    updateName(newName) {
        this.playerName = newName;
    }
}