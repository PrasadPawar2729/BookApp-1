const express=require("express")
const app = express()
const port =2025;
app.get("/",async(req,res)=>{
    res.send("hello")
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})


