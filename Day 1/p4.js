const fs=require("fs");

const read=()=>{fs.readFile("./data.txt","utf-8",(err,data)=>{
    if(err){
        console.error(err);
    }
    else{
        console.log(data);
    }
})}
read();
console.log("hello")
