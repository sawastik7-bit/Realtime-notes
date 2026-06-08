import express from 'express';
import { createRoom, getRoom, getRooms,deleteRoom } from "../../controllers/roomsController.js";

const roomsRouter=express.Router();

roomsRouter.post("/",createRoom);
roomsRouter.get("/",getRooms);
roomsRouter.get("/:id",getRoom);
roomsRouter.delete("/:id",deleteRoom);









export default roomsRouter;