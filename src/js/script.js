"use strict";

import "./utilities/Extensions.js";
import { App } from "./utilities/App.js";
import { Listeners } from "./utilities/listeners.js";
import { Player } from "./models/Player.js";

window.onload = (load) => {
    App.initializePlayer();
    window.test = function() {
        return Player.current();
    }
    Listeners.register();
}