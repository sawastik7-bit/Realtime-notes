import { useState,useEffect } from "react";
import axios from "axios";
import NoteCard from "./NoteCard";
import CreateNoteCard from "./CreateNoteCard";

const NotesSideBar=({selectedRoom})=>{

    const [notes,setNotes]=useState([]);

    const [loading,setLoading]=useState(false);
    const [showCreateNoteCard,setShowCreateNoteCard]=useState(false);




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


 const handleNoteCreation = async ({titleName,content}) => {
    try {
      await axios.post(
        "http://localhost:5000/api/notes",
        {
          title:titleName,
          content:content,
          roomId:selectedRoom.roomId
        }
      );

      await fetchNotes();

      setShowCreateNoteCard(false);

    } catch (error) {
      console.log(error);
    }
  };


     useEffect(() => {
  if(!selectedRoom){
    return;
  }

  fetchNotes();
}, [selectedRoom]);





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
      onClick={()=>setShowCreateNoteCard(true)}
    >
      + Create Note
    </button>
    {showCreateNoteCard && (
        <CreateNoteCard
          handleNoteCreation={
            handleNoteCreation
          }
        />
      )}

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