import express from 'express';
import roomsRouter from './src/routes/roomsRoutes/roomsRoutes.js';
import notesRouter from './src/routes/notesRoutes/notesRoutes.js';
import mongoose from 'mongoose';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';
import { initializeSocket } from './src/sockets/socketHandler.js';

mongoose.connect('mongodb://localhost:27017/realtime-notes');

const app=express();
const server=http.createServer(app,{
    cors:{
        origin:"*"
    }
});

const io=new Server(server,{
    cors:{
        origin:"*"
    },
});
app.use(cors());
app.use(express.json());

initializeSocket(io);
app.use("/api/rooms",roomsRouter);
app.use("/api/notes",notesRouter);
app.get("/",(req,res)=>{
    res.send("Realtime notes server running");
});






server.listen(5000,()=>{
    console.log("server is running on port 5000");
})






