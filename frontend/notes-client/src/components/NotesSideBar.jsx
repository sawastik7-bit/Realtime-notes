import { useState,useEffect } from "react";
import axios from "axios";
import NoteCard from "./NoteCard";


const NotesSideBar=({selectedRoom})=>{

    const [notes,setNotes]=useState([]);

    const [loading,setLoading]=useState(false);


    useEffect(() => {
  if(!selectedRoom){
    return;
  }

  fetchNotes();
}, [selectedRoom]);


    const fetchNotes = async () => {
  try {
    setLoading(true);

    const res = await axios.get(
      `http://localhost:5000/api/notes/${selectedRoom.roomId}`
    );

    setNotes(res.data.notes);

  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};







if (!selectedRoom) {
  return (
    <div className="flex-1 flex items-center justify-center text-gray-400">
      Select a room to view notes
    </div>
  );
}








return (
  <div
    className="
      w-[300px]
      h-screen
      bg-[#313338]
      p-4
      border-l
      border-[#1e1f22]
    "
  >
    <button
      className="
        w-full
        bg-[#5865f2]
        text-white
        py-2
        rounded-lg
        mb-4
      "
    >
      + Create Note
    </button>

    {loading ? (
      <p className="text-gray-400">
        Loading...
      </p>
    ) : notes.length === 0 ? (
      <p className="text-gray-400">
        No notes found
      </p>
    ) : (
      notes.map((note) => (
        <NoteCard
          key={note._id}
          note={note}
        />
      ))
    )}
  </div>
);


}



export default NotesSideBar;