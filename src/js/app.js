"use strict";

import {Alert} from "./utilities/alert.js";
import {Character} from "./models/character.js";

//Alert.present("hey, listen!");

let dallas = new Character("Dallas", "Rexington");
console.log(dallas);
dallas.greet();