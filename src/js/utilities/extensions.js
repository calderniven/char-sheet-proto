"use strict";

Array.prototype.random = function() {
    return this[Math.floor((Math.random()*this.length))];
}

Array.prototype.average = function() {
    let sum = 0;
    for (const number of this) {
        sum = sum + number;
    }
    return sum/this.length;
}

Number.prototype.roundUp = function() {
    return Math.ceil(this);
}