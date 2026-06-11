import { useState } from "react";
import RoomSidebar from "./components/RoomSidebar.jsx";
import NotesSideBar from "./components/NotesSideBar.jsx";
const App=()=>{
const[selectedRoom,setSelectedRoom]=useState(null);




    return (

        <div className="flex">
<RoomSidebar setSelectedRoom={setSelectedRoom}/>
<NotesSideBar selectedRoom={selectedRoom}/>


        </div>
    )
}


export default App;