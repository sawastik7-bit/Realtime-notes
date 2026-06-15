const ChatCard = ({ text,createdAt }) => {
  return (
    <div
      className="
        bg-yellow-300
        border-4
        border-black
        p-4
        rounded-none
        text-black
        font-bold
        shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
        hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
        hover:translate-x-[4px]
        hover:translate-y-[4px]
        transition-all
      "
    >
        <p className="text-xs text-gray-400 mb-2">
        {new Date(createdAt).toLocaleTimeString("en-us",{
          hour:"2-digit",
          minute:"2-digit",
          hour12:true
        })}
      </p>
      {text}
    </div>
  );
};

export default ChatCard;