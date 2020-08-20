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

    static activeCharacter() {
        let player = window.player;
        return player.characters[player.activeCharacter];
    }

    static fakePlayer(name = "Imposter") {
        name = prompt("Your name?");
        let prefixes = ["Doctor", "Lord", "Count", "Reverend", "Dirt-Farmer", "Pope", "that pig"];
        let suffixes = ["-Sama", "-Kun", "-Sensei", " from HR", ", the runway model"]
        return new Player(`${prefixes.random()} ${name}${suffixes.random()}`);
    }

    updateName(newName) {
        this.playerName = newName;
    }
}