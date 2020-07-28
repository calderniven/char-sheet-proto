"use strict";

import { Player } from "./models/Player.js";
import { Character } from "./models/Character.js";
import "./utilities/extensions.js";

let newbie = new Player("Mike");


//console.log(Player.fakePlayer());

let newCharacter = new Character("bobert");
newCharacter.updateAttribute(
    "mind",
    Number(prompt("gimme a numba bruh"))
);
console.log(newCharacter);




