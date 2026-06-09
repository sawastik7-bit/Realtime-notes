import express from 'express';
import { createNote,fetchNotes,deleteNote,getNote } from '../../controllers/notesController.js';
const notesRouter=express.Router();


notesRouter.post("/", createNote);

notesRouter.get("/:roomId", fetchNotes);

notesRouter.get("/note/:id", getNote);

notesRouter.delete("/note/:id", deleteNote);

export default notesRouter;