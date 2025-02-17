const fs=require("fs")
fs.mkdir("mydir",(err)=>{
    if(err){
        console.error(err)
    }
    console.log('done')
})
fs.writeFileSync("./mydir/data.txt","hello",(err)=>{
    if(err){
        console.error(err)
    }
    else{
        console.log("done write")
    }
})