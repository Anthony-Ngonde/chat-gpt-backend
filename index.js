import express from "express"

const port = process.env.PORT || 3000;
const app = express();

app.get("/api/upload",(req,res)=>{
    res.send("It works!")
})


app.listen(port,()=>{
    console.log("Server running on 3000")
})