"use strict";

import { Player } from "../models/Player.js";
import { Character } from "../models/Character.js";
import { $$ } from "./Helpers.js";
import { CharacterList } from "../ui/CharacterSelection/CharacterList.js";


export class App {

    static initializePlayer() {
        let newPlayer = Player.fakePlayer("yo mama");
        window.player = newPlayer;
        CharacterList.render();
    }
}
