const fs=require("fs/promises")

const read=async ()=>{
    const data=await fs.readFile("./mydir/data.txt","utf-8");
    console.log(data)
}
read();
