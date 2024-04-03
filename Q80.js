"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Question80:Updating Object Properties: Add a property named color to the existing car object, and then update the year property to 2021, Show how perform these operations.
let car = {
    make: "Toyota",
    model: "Corolla",
    year: "2023",
};
let car1 = Object.assign({}, car, { color: "blue" });
console.log("Car:", car);
console.log("car1:", car1);
