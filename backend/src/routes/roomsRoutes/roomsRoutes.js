import express from 'express';
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../../controllers/roomsController.js";

const roomsRouter=express.Router();

roomsRouter.post("/",createRoom);
roomsRouter.get("/",getRooms);
roomsRouter.get("/:id",getRoom);
roomsRouter.put("/:id",updateRoom);
roomsRouter.delete("/:id",deleteRoom);









export default roomsRouter;