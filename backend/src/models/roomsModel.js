import mongoose from "mongoose";

const roomsSchema = new mongoose.Schema(
  {
    roomId: {
      type: String,
      required: true,
      unique: true,
      maxlength: 20
    },
    roomName: {
      type: String,
      default: "general"
    }
  },
  {
    timestamps: true
  }
);

const Rooms = mongoose.model("Rooms", roomsSchema);

export default Rooms;