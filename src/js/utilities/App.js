"use strict";

import { Player } from "../models/Player.js";
import { Character } from "../models/Character.js";

export class App {

    static initializePlayer() {
        let newPlayer = Player.fakePlayer("yo mama");
        console.log(newPlayer);
        window.player = newPlayer;

    }
}
