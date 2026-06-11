import axios from 'axios';
import { useEffect, useState } from 'react';
import ChatCard from "./ChatCard.jsx"

const ChatRoom=({selectedNote})=>{
const [chats,setChats]=useState([]);
const [loading,setLoading]=useState(false);
    const fetchChat=async()=>{

        setLoading(true);
        
        
        try{
        const res=await axios.get(`http://localhost:5000/api/notes/note/${selectedNote._id}`)

        if(!res){
            console.error("error in fetching chats");
        }


        setChats(res.data.note.content);

    }catch(error){
        console.error("error in fetching the chats",error);
    }finally{
        setLoading(false);
    }
    }

        useEffect(()=>{
            if(!selectedNote) return;
        fetchChat();
    },[selectedNote]);


if(!selectedNote){
    return (
        <div>
            Select a note
        </div>
    )
}

    if(loading){
        return(
            <div>Loading chats...!</div>
        )
    }



    



    return(



 <div
    className="
      flex-1
      h-screen
      bg-[#313338]
      p-6
      overflow-y-auto
    "
  >
    <h2
      className="
        text-white
        text-xl
        font-semibold
        mb-6
      "
    >
      {selectedNote.title}
    </h2>

<div className="space-y-3">
  {chats.length === 0 ? (
    <p className="text-gray-400">
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
</div>

    <div className="space-y-3">
      {chats.map((chat) => (
        <ChatCard
          key={chat._id}
          text={chat.text}
        />
      ))}
    </div>
  </div>
 )

}

export default ChatRoom;