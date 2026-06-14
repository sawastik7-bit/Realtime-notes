const ChatCard = ({ text }) => {
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
      {text}
    </div>
  );
};

export default ChatCard;