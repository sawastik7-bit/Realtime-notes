

const RoomCard=({room,handleRoomSelect,deleteRoom})=>{
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

      <button
        onClick={(e) => {
          e.stopPropagation();
          deleteRoom(room);
        }}
        className="mt-2 px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-xs rounded transition-colors"
      >
        Delete
      </button>
    </div>
    )

}

export default RoomCard;