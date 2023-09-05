let a: number|string;
a=2//narrowing
console.log(a);//picked it as a number if we write . it will give us options related
//to numbers
a="waheed";
console.log(a);//picked it as a number if we write . it will give us options related
//to string
function typefind(val:string|number){
    if (typeof val === "string"){
        return val.toLowerCase()
    }
   else{
   return("Here's Your number");
    }
}
let b=typefind(6)
console.log(b);

// second example

function typeId(ID:string|null){
    if (typeof ID === "string"){
        return ID.toLowerCase()
    }
   else{
   return("Please give ID");
    }
}
let c=typeId(null)
console.log(c);

// Advantages of typescript narrowing
//TypeScript narrowing is a valuable feature that helps you write safer 
//and more understandable code by narrowing down the types of variables based
 //on conditions, reducing the chance of bugs and improving code quality


type Shape = "circle" | "square" | "triangle";

function getShapeDescription(shape: Shape): string {
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




