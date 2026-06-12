const NoteCard = ({ note, setSelectedNote,handleNoteDelete }) => {
  

  return (
    <div
      className="
      bg-[#404249]
      p-3
      rounded-lg
      text-white
      cursor-pointer
    "
      onClick={() =>{
      
         setSelectedNote(note)}}
    >
      <div className="flex items-center justify-between gap-3">
        <span>{note.title}</span>
        <button
          type="button"
          onClick={(e)=>{
            e.stopPropagation();
           
            handleNoteDelete(note)}}
          className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;