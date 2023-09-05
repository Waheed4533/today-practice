"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
// const classentry=new Promise((enter,getlost)=>{
// setTimeout(()=>{
// let permission = true;
// if(permission){
//     enter("You can come into the class")
// }else{
//     getlost("You are not allowed")
// }
// },9000)
// })
// classentry.then((ijazat)=>{
//     console.log("permisson",ijazat); 
// }).catch((nai)=>{
//     console.log("getlost",nai)
// })
function fetchUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ username: "john_doe" });
        }, 1000);
    });
}
function fetchUserPosts(username) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Post 1", "Post 2"]);
        }, 1500);
    });
}
fetchUserData()
    .then((userData) => {
    console.log("User Data:", userData);
    return fetchUserPosts(userData.username);
})
    .then((posts) => {
    console.log("User Posts:", posts);
});
