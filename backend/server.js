import express from 'express';
import roomsRouter from './src/routes/roomsRoutes/roomsRoutes.js';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/realtime-notes');

const app=express();
app.use(express.json());

app.use("/api/rooms",roomsRouter);
app.use("/api/notes",notesRouter);





app.listen(5000,()=>{
    console.log("server is running on port 5000");
})






