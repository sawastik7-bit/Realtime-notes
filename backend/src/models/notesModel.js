import mongoose from "mongoose";
import Rooms from "./roomsModel.js";
const notesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: "Untitled",
      maxlength: 100,
    },

    content: {
      type: String,
      default: "",
    },

    room: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Rooms",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Notes = mongoose.model("Notes", notesSchema);

export default Notes;