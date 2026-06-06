import express from 'express';

import http from 'http';
import {Server} from 'socket.io';


const app=express();
const server=http.createServer(app);

const io=new Server(server);


io.on("connection",(socket)=>{
    console.log("a user is connected");


   socket.on("joinRoom",(room)=>{
    console.log(` socket ${socket.id} joining room`,room);
    socket.join(room);
   })

   socket.on("roomMessage",(data)=>{
    console.log("message from the client is ", data);

    io.to("room1").emit("roomMessage",`message from teh server to ${socket.id}`);

   });



   
    socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
    
});
 

app.get('/',(req,res)=>{
    res.send("this is the server ");
})

server.listen(5000,()=>{
    console.log("server is running on port 5000");
})