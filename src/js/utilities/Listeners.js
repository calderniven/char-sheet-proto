"use strict";

import {$} from "./Helpers.js";
import {Character} from "../models/Character.js";


export class Listeners {

    static register() {
        let button = $("button.new-character");
        button.onclick = function(event) {
            Character.register();
        }
    }
}