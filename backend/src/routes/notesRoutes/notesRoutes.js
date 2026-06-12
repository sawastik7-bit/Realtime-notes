import express from 'express';
import { createNote,fetchNotes,deleteNote,getNote } from '../../controllers/notesController.js';
const notesRouter=express.Router();


notesRouter.post("/", createNote);

notesRouter.get("/note/:id", getNote);

notesRouter.delete("/note/:id", deleteNote);

notesRouter.get("/:roomId", fetchNotes);

export default notesRouter;