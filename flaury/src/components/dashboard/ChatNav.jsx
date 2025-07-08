import { Link } from "react-router-dom";
import SideNav from "./navbar/SideNav";

const messages = [
  {
    id: 1,
    img: "/timelessrecommended.png",
    name: "Pella Tehilah",
    text: "I'll be there in 5 minutes!",
    time: "8:00",
    isRead: true,
  },
  {
    id: 2,
    img: "/timelessrecommended.png",
    name: "John Doe",
    text: "Hello there",
    time: "5:00",
    isRead: true,
  },
  {
    id: 3,
    img: "/timelessrecommended.png",
    name: "Madison Jason",
    text: "Will you be available today?",
    time: "2:00",
    isRead: true,
  },
];

const ChatNav = ({ onSelectMessage }) => {
  return (
    <nav className="w-full md:w-2/3 h-screen text-white flex flex-col items-center bg-secondary">
      {/* Search bar */}
      <div className="w-full px-4 py-3 border-b border-primary">
        <div className="flex gap-3 items-center bg-secondary border border-primary rounded-md px-3 py-2">
          <img src="/search.svg" alt="Search" className="w-4 h-4" />
          <input
            type="text"
            placeholder="Search chat"
            className="w-full bg-transparent text-primary placeholder-primary outline-none text-sm"
          />
        </div>
      </div>

      {/* Chat List */}
      <div className="w-full flex-1 overflow-y-auto">
        {messages.map((message) => (
          <div
            key={message.id}
            className="flex justify-between items-center px-4 py-3 border-b border-primary cursor-pointer transition hover:bg-[#2a2a2a]"
            onClick={() => onSelectMessage(message)}
          >
            <div className="flex items-center gap-3">
              <img
                src={message.img}
                alt={`${message.name} profile`}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="text-primary">
                <h3 className="font-semibold text-base">{message.name}</h3>
                <p className="text-sm text-gray-400 truncate max-w-[200px]">
                  {message.text}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-end justify-between gap-1">
              {message.isRead && (
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              )}
              <p className="text-xs text-gray-400">{message.time}</p>
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default ChatNav;
