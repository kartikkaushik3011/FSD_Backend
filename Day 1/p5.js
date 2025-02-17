const fs=require("fs")
const data="async data"
const write=()=>{
    fs.writeFile("./data.txt",data,(err)=>{
        if (err){ console.error(err);}
    })
}
console.log("data printed");
write();
