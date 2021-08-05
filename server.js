const express = require("express");
const router=require("./router")
const cors = require("cors");

const app=express();

const port = process.env.PORT || 4000;
app.use(express.json());
app.use(cors("cors"));
app.use(router);

app.listen(port, ()=>{
    console.log(`the server is open on http://localhost:${port}`)
})