import { useEffect, useState } from "react";
import axios from "axios";
import RoomCard from "./RoomCard";
import CreateRoomCard from "./CreateRoomCard";

const RoomSidebar = ({setSelectedRoom}) => {
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

 const confirmed = window.confirm(
    `Delete ${room.roomName}?`
  );

try{

  const res=await axios.delete(`http://localhost:5000/api/rooms/${room.roomId}`);

alert("Room deleted successfully");
  await fetchRooms();
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
      bg-[#2b2d31]
      p-4
      flex
      flex-col
    "
    >
      <button
        onClick={() => setShowModal(true)}
        className="
        bg-[#5865f2]
        text-white
        py-2
        rounded-lg
        mb-4
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

     <div className="space-y-2">
  {loading ? (
    <p className="text-white">
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