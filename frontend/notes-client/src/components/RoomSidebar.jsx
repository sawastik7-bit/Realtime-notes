import { useEffect, useState } from "react";
import axios from "axios";
import RoomCard from "./RoomCard";
import CreateRoomCard from "./CreateRoomCard";

const RoomSidebar = ({setSelectedRoom,selectedRoom,setSelectedNote}) => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const fetchRooms = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        "http://localhost:5000/api/rooms"
      );

      
      setRooms(res.data.rooms);

      
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  const handleRoomSelect=(room)=>{
    setSelectedRoom(room);

  setSelectedNote(null);
  }
  const handleRoomCreation = async (roomName) => {
    try {
      await axios.post(
        "http://localhost:5000/api/rooms",
        {
          roomName,
        }
      );

      await fetchRooms();

      setShowModal(false);

    } catch (error) {
      console.log(error);
    }
  };

  const deleteRoom=async(room)=>{
if(!room) return;



const id=room.roomId;

try{

  const res=await axios.delete(`http://localhost:5000/api/rooms/${id}`);


  if (selectedRoom?.roomId === room.roomId) {
  setSelectedRoom(null);
}
  await fetchRooms();
  alert("Room deleted successfully");

  return;


}catch(error){

  console.log("error in deleting the room",error);

}

  }

  

  return (
    <div
      className="
      w-[280px]
      h-screen
      bg-pink-200
      p-4
      flex
      flex-col
      border-r-4
      border-black
      overflow-y-auto
    "
    >
      <button
        onClick={() => setShowModal(true)}
        className="
        bg-blue-400
        text-black
        font-extrabold
        py-2
        mb-4
        border-4
        border-black
        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
        hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
        hover:translate-x-[2px]
        hover:translate-y-[2px]
        transition-all
      "
      >
        + Create Room
      </button>

      {showModal && (
        <CreateRoomCard
          handleRoomCreation={
            handleRoomCreation
          }
        />
      )}

     <div className="space-y-1">
  {loading ? (
    <p
      className="
        bg-white
        border-4
        border-black
        px-4
        py-3
        font-bold
        text-black
        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
      "
    >
      Loading...
    </p>
  ) : (
    rooms.map((room) => (
      <RoomCard
      handleRoomSelect={handleRoomSelect}
        key={room._id}
        room={room}
        deleteRoom={deleteRoom}
      />
    ))
  )}
</div>
    </div>
  );
};

export default RoomSidebar;