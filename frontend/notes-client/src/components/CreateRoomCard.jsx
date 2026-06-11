import { useState } from "react";

const CreateRoomCard = ({
  handleRoomCreation,
}) => {
  const [roomName, setRoomName] =
    useState("");

  const handleSubmit = () => {
    if (!roomName.trim()) {
      alert("Enter room name");
      return;
    }

    handleRoomCreation(roomName);

    setRoomName("");
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
        Create Room
      </h2>

      <input
        type="text"
        value={roomName}
        onChange={(e) =>
          setRoomName(e.target.value)
        }
        placeholder="Room Name"
        className="
          w-full
          p-2
          rounded
          mb-3
          text-black
        "
      />

      <button
        onClick={handleSubmit}
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

export default CreateRoomCard;