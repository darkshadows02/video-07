const crypto=require("crypto");

console.log("hello world");

crypto.pbkdf2Sync("password", "salt", 50000000, 50, 'sha512');

console.log("first key is generated....")
crypto.pbkdf2("password", "salt", 50000000, 50, "sha512", (err, driveKey)=>{
         console.log("second key is generated...")
})
 