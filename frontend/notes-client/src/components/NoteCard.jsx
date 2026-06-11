const NoteCard = ({ note ,setSelectedNote}) => {
  return (
    <div
      className="
      bg-[#404249]
      p-3
      rounded-lg
      text-white
      cursor-pointer
    "
    onClick={()=>setSelectedNote(note)}
    >
      {note.title}
    </div>
  );
};

export default NoteCard;