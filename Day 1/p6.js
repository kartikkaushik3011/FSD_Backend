const fs=require("fs")
const data="async data"
const append=()=>{
    fs.appendFile("./data.txt",data,(err)=>{
        if (err){ console.error(err);}
    })
}
console.log("data printed");
append();
