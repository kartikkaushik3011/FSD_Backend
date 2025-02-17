const fs=require("fs")
fs.unlink("./data.txt",(err)=>{
    console.error(err)
})
console.log("file deleted")