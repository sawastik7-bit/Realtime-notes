import { useState } from "react";
import RoomSidebar from "./components/RoomSidebar.jsx";
import NotesSideBar from "./components/NotesSideBar.jsx";
import ChatRoom from "./components/ChatRoom.jsx"
const App=()=>{
const[selectedRoom,setSelectedRoom]=useState(null);
const [selectedNote,setSelectedNote]=useState(null);



    return (

        <div className="flex">
<RoomSidebar setSelectedRoom={setSelectedRoom} selectedRoom={selectedRoom} setSelectedNote={setSelectedNote}/>
<NotesSideBar
  selectedRoom={selectedRoom}
  selectedNote={selectedNote}
  setSelectedNote={setSelectedNote}
/>
<ChatRoom selectedNote={selectedNote} setSelectedNote={setSelectedNote}/>


        </div>
    )
}


export default App;