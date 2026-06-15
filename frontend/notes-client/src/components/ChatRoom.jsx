import axios from "axios";
import { useEffect, useRef, useState } from "react";
import ChatCard from "./ChatCard.jsx";
import socket from "../socket/socket.js";

const ChatRoom = ({ selectedNote }) => {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const lastMessageRef=useRef(null);


  const fetchChat = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `http://localhost:5000/api/notes/note/${selectedNote._id}`
      );

      setChats(res.data.note.content);
    } catch (error) {
      console.error(
        "error in fetching the chats",
        error
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSendContribution = () => {
    if (!message.trim()) return;

    socket.emit("add-contribution", {
      noteId: selectedNote._id,
      content: message,
    });

    setMessage("");
  };
useEffect(()=>{
   if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
},[chats]);
  useEffect(() => {

    if (!selectedNote) {
      setChats([]);
      return;
    }


    fetchChat();

    socket.emit(
      "join-note",
      selectedNote._id
    );

    const handleNewContribution = (
      messageData
    ) => {
      setChats((prev) => [
        ...prev,
        messageData,
      ]);
    };

    socket.on(
      "new-contribution",
      handleNewContribution
    );

    return () => {
      socket.off(
        "new-contribution",
        handleNewContribution
      );

      socket.emit(
        "leave-note",
        selectedNote._id
      );
    };
  }, [selectedNote]);

  

  if (!selectedNote) {
    return (
      <div
        className="
          flex-1
          h-screen
          bg-yellow-200
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
          Select a note
        </p>
      </div>
    );
  }

  if (loading) {
    return (
      <div
        className="
          flex-1
          h-screen
          bg-yellow-200
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
          Loading chats...!
        </p>
      </div>
    );
  }

  return (
    <div
      className="
        flex-1
        h-screen
        bg-yellow-200
        flex
        flex-col
      "
    >
      <div
        className="
          flex-1
          overflow-y-auto
          p-6
        "
      >
        <h2
          className="
            inline-block
            bg-pink-400
            border-4
            border-black
            text-black
            text-xl
            font-extrabold
            px-4
            py-2
            mb-6
            shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
          "
        >
          {selectedNote.title}
        </h2>

        <div className="space-y-4">
          {chats.length === 0 ? (
            <p
              className="
                bg-white
                border-4
                border-black
                px-4
                py-3
                font-bold
                text-black
                inline-block
                shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
              "
            >
              No contributions yet
            </p>
          ) : (
            chats.map((chat) => (
              <ChatCard
                key={chat._id}
                text={chat.text}
              />
            ))
          )}

          <div ref={lastMessageRef}></div>
        </div>
      </div>

      <div
        className="
          p-4
          border-t-4
          border-black
          bg-yellow-300
          flex
          gap-3
        "
      >
        <input
          type="text"
          value={message}
          onKeyDown={(e)=>{
            if(e.key=='Enter') handleSendContribution()
          }}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          placeholder="Share what you learned..."
          className="
            flex-1
            bg-white
            text-black
            font-bold
            placeholder:text-gray-500
            border-4
            border-black
            p-3
            outline-none
            shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
          "
        />

        <button
          onClick={handleSendContribution}
          className="
            bg-blue-400
            text-black
            font-extrabold
            px-6
            border-4
            border-black
            shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
          "
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;