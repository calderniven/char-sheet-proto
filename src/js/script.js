"use strict";

import "./utilities/Extensions.js";
import { App } from "./utilities/App.js";
import { Listeners } from "./utilities/listeners.js";

window.onload = (load) => {
    App.initializePlayer();
    Listeners.register();
}