import { useState,useEffect } from "react";
import axios from "axios";
import NoteCard from "./NoteCard";
import CreateNoteCard from "./CreateNoteCard";

const NotesSideBar=({selectedRoom,setSelectedNote,selectedNote})=>{

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


 const handleNoteCreation = async ({titleName}) => {
    try {
      await axios.post(
        "http://localhost:5000/api/notes",
        {
          title:titleName,
         
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
    <div
      className="
        flex-1
        h-screen
        bg-purple-200
        flex
        items-center
        justify-center
      "
    >
      <p
        className="
          bg-white
          border-4
          border-black
          px-6
          py-3
          font-bold
          text-black
          text-lg
          shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
        "
      >
        Select a room to view notes
      </p>
    </div>
  );
}

const handleNoteDelete = async (note) => {
  if (!note) return;

  const confirmedDelete = window.confirm(
    `Delete ${note.title}?`
  );

  if (!confirmedDelete) return;

  try {
    await axios.delete(
      `http://localhost:5000/api/notes/note/${note._id}`
    );

    if (selectedNote?._id === note._id) {
      setSelectedNote(null);
    }

    await fetchNotes();

  } catch (error) {
    console.log(error);
  }
};








return (
  <div
    className="
      w-[300px]
      h-screen
      bg-purple-200
      p-4
      border-l-4
      border-black
      overflow-y-auto
    "
  >
    <button
      className="
        w-full
        bg-blue-400
        text-black
        font-extrabold
        py-2
        mb-4
        border-4
        border-black
        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
        hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
        hover:translate-x-[2px]
        hover:translate-y-[2px]
        transition-all
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
      <p
        className="
          bg-white
          border-4
          border-black
          px-4
          py-3
          font-bold
          text-black
          shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
        "
      >
        Loading...
      </p>
    ) : notes.length === 0 ? (
      <p
        className="
          bg-white
          border-4
          border-black
          px-4
          py-3
          font-bold
          text-black
          shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
        "
      >
        No notes found
      </p>
    ) : (
      notes.map((note) => (
        <NoteCard
          key={note._id}
          note={note}
          setSelectedNote={setSelectedNote}
          handleNoteDelete={handleNoteDelete}
        />
      ))
    )}
  </div>
);


}



export default NotesSideBar;