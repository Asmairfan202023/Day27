"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function logObjectProperties(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}
// Example usage:
const person = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com'
};
logObjectProperties(person);
