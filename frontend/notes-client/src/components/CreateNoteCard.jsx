import { useState } from "react";

const CreateNoteCard = ({
  handleNoteCreation,
}) => {
  
  const [titleName, setTitleName] =
    useState("");
  const [content, setContent] =
    useState("");

  const handleNoteSubmit = () => {
    if ( !content.trim()) {
      alert("Enter content");
      return;
    }

    handleNoteCreation({titleName,content});

    setTitleName("");
    setContent("");
  };

  return (
    <div
      className="
      bg-[#404249]
      p-4
      rounded-lg
      mb-4
    "
    >
      <h2 className="text-white mb-3">
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
          p-2
          rounded
          mb-3
          text-black
        "
      />
      <input
        type="text"
        value={content}
        onChange={(e) =>
          setContent(e.target.value)
        }
        placeholder="Content"
        className="
          w-full
          p-2
          rounded
          mb-3
          text-black
        "
      />

      <button
        onClick={handleNoteSubmit}
        className="
          bg-[#5865f2]
          text-white
          px-4
          py-2
          rounded
        "
      >
        Create
      </button>
    </div>
  );
};

export default CreateNoteCard;