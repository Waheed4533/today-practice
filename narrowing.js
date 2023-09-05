"use strict";
// let a: number|string;
// a=2//narrowing
// console.log(a);//picked it as a number if we write . it will give us options related
// //to numbers
// a="waheed";
// console.log(a);//picked it as a number if we write . it will give us options related
// //to string
// function typefind(val:string|number){
//     if (typeof val === "string"){
//         return val.toLowerCase()
//     }
//    else{
//    return("Here's Your number");
//     }
// };
// let b=typefind(6)
// console.log(b);
// // second example
// function typeId(ID:string|null){
//     if (typeof ID === "string"){
//         return ID.toLowerCase()
//     }
//    else{
//    return("Please give ID");
//     }
// };
// let c=typeId("ARSAL")
// console.log(c);
Object.defineProperty(exports, "__esModule", { value: true });
function getShapeDescription(shape) {
    switch (shape) {
        case "circle":
            return "A round shape";
        case "square":
            return "A four-sided shape with equal sides";
        case "triangle":
            return "A three-sided shape";
        default:
            return "Unknown shape"; // TypeScript ensures all cases are handled.
    }
}
let prompt = require("prompt-sync")();
let d = getShapeDescription(prompt("give shape   "));
console.log(d);
