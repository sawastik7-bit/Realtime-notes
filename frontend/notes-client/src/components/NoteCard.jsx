const NoteCard = ({ note }) => {
  return (
    <div
      className="
      bg-[#404249]
      p-3
      rounded-lg
      text-white
      cursor-pointer
    "
    >
      {note.title}
    </div>
  );
};

export default NoteCard;