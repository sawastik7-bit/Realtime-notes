const RoomCard=({room,handleRoomSelect,deleteRoom})=>{
    return (

         <div
      onClick={() => handleRoomSelect(room)}
      className="
        p-3
        mb-3
        cursor-pointer
        bg-white
        border-4
        border-black
        text-black
        shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
        hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
        hover:translate-x-[2px]
        hover:translate-y-[2px]
        transition-all
      "
    >
      <h3 className="font-extrabold">
        {room.roomName}
      </h3>

      <p className="text-xs font-bold text-gray-600 mt-1">
        {room.roomId}
      </p>

      <button
        onClick={(e) => {
          e.stopPropagation();
          deleteRoom(room);
        }}
        className="
          mt-2
          px-3
          py-1
          bg-red-400
          text-black
          font-extrabold
          text-xs
          border-4
          border-black
          shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
          hover:bg-red-500
          hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]
          hover:translate-x-[2px]
          hover:translate-y-[2px]
          transition-all
        "
      >
        Delete
      </button>
    </div>
    )

}

export default RoomCard;