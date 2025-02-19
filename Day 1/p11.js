const fs=require("fs/promises")

const write= (data)=>{
    fs.writeFile("./mydir/data.txt",data,(err)=>{
        if(err){
            console.error(err)
        }
        else{
            console.log("Success!")
        }
    });
}
write("hello bhrata");