console.log("hello world");

   const fs=require("fs");
// const https=require("https");
 

 fs.readFileSync("./file.txt", "utf8");
 console.log("first read file.....")

// https.get("", (res)=>{
//     console.log("Fetched Data sucessfully...");
// })
setTimeout(()=>{
    console.log("setTimeout called after 5")
}, 5000);
fs.readFile("./file.txt", "utf8", (err, data)=>{
     console.log("file data :", data);
})

function multiplyFn(x, y){
      return x*y;
}
console.log(multiplyFn(1000, 3000));
