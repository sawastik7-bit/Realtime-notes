import { useState } from "react";

const CreateNoteCard = ({
  handleNoteCreation,
}) => {
  
  const [titleName, setTitleName] =
    useState("");


  const handleNoteSubmit = () => {
 

    handleNoteCreation({titleName});

    setTitleName("");
    
  };

  return (
    <div
      className="
      bg-green-300
      border-4
      border-black
      p-4
      mb-4
      shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
    "
    >
      <h2 className="text-black font-extrabold text-lg mb-3">
        Create Note
      </h2>
      <input
        type="text"
        value={titleName}
        onChange={(e) =>
          setTitleName(e.target.value)
        }
        placeholder="Title Name"
        className="
          w-full
          bg-white
          text-black
          font-bold
          placeholder:text-gray-500
          border-4
          border-black
          p-2
          mb-3
          outline-none
          shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
          focus:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
          focus:translate-x-[2px]
          focus:translate-y-[2px]
          transition-all
        "
      />
    
      <button
        onClick={handleNoteSubmit}
        className="
          bg-blue-400
          text-black
          font-extrabold
          px-4
          py-2
          border-4
          border-black
          shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
          hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
          hover:translate-x-[2px]
          hover:translate-y-[2px]
          transition-all
        "
      >
        Create
      </button>
    </div>
  );
};

export default CreateNoteCard;