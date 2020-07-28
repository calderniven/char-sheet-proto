"use strict";

export class Player {

    constructor(playerName) {
        this.playerName = playerName;
        this.characters = [];
        this.id = null
    }

    static fakePlayer() {
        let prefixes = ["Mr.", "Ms.", "Dr.", "Lord", "Count"];
        return new Player(`${prefixes.random()} Imposter`);
    }

    updateName(newName) {
        this.playerName = newName;
    }
}