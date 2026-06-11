

const RoomCard=({room,handleRoomSelect})=>{
    return (

         <div
      onClick={() => handleRoomSelect(room)}
      className="
        p-3
        rounded-lg
        cursor-pointer
        bg-[#404249]
        hover:bg-[#4a4d52]
        transition-all
      "
    >
      <h3 className="text-white font-medium">
        {room.roomName}
      </h3>

      <p className="text-xs text-gray-400 mt-1">
        {room.roomId}
      </p>
    </div>
    )

}

export default RoomCard;