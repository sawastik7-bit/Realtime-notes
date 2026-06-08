import express from 'express';
import { createNote,fetchNotes,deleteNote,getNote } from '../../controllers/notesController';
const notesRouter=express.Router();


notesRouter.post("/", createNote);

notesRouter.get("/room/:roomId", fetchNotes);

notesRouter.get("/:id", getNote);

notesRouter.delete("/:id", deleteNote);