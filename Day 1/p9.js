const fs=require("fs")
fs.rmdir("mydir",(err)=>{
    if(err){
        console.error(err)
    }
    else{
        console.log("done")
    }
})
console.log("done")