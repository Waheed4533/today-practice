// const myPromise = new Promise((resolve, reject) => {
//     // Simulate an asynchronous operation (e.g., fetching data from a server)
//     setTimeout(() => {
//       const success = true; // Simulating success
//       if (success) {
//         resolve("Operation completed successfully!");
//       } else {
//         reject("Operation failed!");
//       }
//     }, 2000); // Simulate a 2-second delay
//   });
//   myPromise
//   .then((result) => {
//     console.log("Success:", result);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
const classentry=new Promise((enter,getlost)=>{
setTimeout(()=>{
let permission = true;
if(permission){
    enter("You can come into the class")
}else{
    getlost("You are not allowed")
}
},9000)
})
classentry.then((ijazat)=>{
    console.log("permisson",ijazat); 
}).catch((nai)=>{
    console.log("getlost",nai)
})
  