require("dotenv").config();
const express = require("express");
const http =require("http");
const bodyParser =require("body-parser");
const cors = require("cors");
const port=process.env.PORT;

const app = express();
const server = http.createServer(app);

const Routes = require("./app/routes");
const socketManager = require("./app/socketManager");



app.use([
   cors(),
   bodyParser.json(),
   bodyParser.urlencoded({extended:false}), 
   Routes
])


const io = require("socket.io")(server);
io.on("connection" , socketManager);



server.listen(port , ()=>{
    console.log("server is running on port" ,port)
})