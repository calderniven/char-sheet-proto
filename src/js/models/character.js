import { Alert } from "../utilities/alert.js";

export class Character {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greet() {
        Alert.present(`Stay a while, ${this.firstName} ${this.lastName}`);
    }
}