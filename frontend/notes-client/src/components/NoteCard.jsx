const NoteCard = ({ note, setSelectedNote,handleNoteDelete }) => {
  

  return (
    <div
      className="
      bg-white
      border-4
      border-black
      p-3
      mb-3
      text-black
      font-bold
      cursor-pointer
      shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
      hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
      hover:translate-x-[2px]
      hover:translate-y-[2px]
      transition-all
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
          className="
            bg-red-400
            text-black
            font-extrabold
            border-4
            border-black
            px-2
            py-1
            shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
            hover:bg-red-500
            hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]
            hover:translate-x-[2px]
            hover:translate-y-[2px]
            transition-all
          "
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;