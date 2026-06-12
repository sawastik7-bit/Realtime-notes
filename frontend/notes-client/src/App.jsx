import { useState } from "react";
import RoomSidebar from "./components/RoomSidebar.jsx";
import NotesSideBar from "./components/NotesSideBar.jsx";
import ChatRoom from "./components/ChatRoom.jsx"
const App=()=>{
const[selectedRoom,setSelectedRoom]=useState(null);
const [selectedNote,setSelectedNote]=useState(null);



    return (

        <div className="flex">
<RoomSidebar setSelectedRoom={setSelectedRoom}/>
<NotesSideBar selectedRoom={selectedRoom} setSelectedNote={setSelectedNote}/>
<ChatRoom selectedNote={selectedNote}/>


        </div>
    )
}


export default App;