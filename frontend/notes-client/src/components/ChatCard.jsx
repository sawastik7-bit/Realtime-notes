const ChatCard = ({ text }) => {
  return (
    <div
      className="
        bg-[#2b2d31]
        border
        border-[#404249]
        p-4
        rounded-lg
        text-gray-200
        hover:bg-[#35373c]
        transition
      "
    >
      {text}
    </div>
  );
};

export default ChatCard;