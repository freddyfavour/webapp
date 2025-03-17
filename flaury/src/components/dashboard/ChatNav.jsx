import { Link } from "react-router-dom";
import SideNav from "./SideNav";

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
    <nav className="w-full md:w-2/3 ml-4 h-screen text-white flex flex-col items-center">
      {/* <div className="w-full md:w-fit fixed"> */}
        <div className="bg-secondaryColor p-4 mt-20 w-full">
          <div className="flex gap-4 items-center bg-secondaryColor my-2 border border-primaryColor rounded-md">
            <div className="px-2">
              <img src="/search.svg" alt="Search icon" />
            </div>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search chat"
              className="w-full px-4 py-2 text-sm bg-secondaryColor rounded-md text-primaryColor placeholder-primaryColor"
            />
          </div>
        </div>
        <div className="bg-secondaryColor w-full h-screen overflow-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className="flex justify-between items-center p-4 border-b cursor-pointer hover:bg-gray-100"
              onClick={() => onSelectMessage(message)}
            >
              <div className="flex gap-2 items-center">
                <img
                  src={message.img}
                  alt={message.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="text-primaryColor">
                  <h3 className="font-bold">{message.name}</h3>
                  <p className="text-xs">{message.text}</p>
                </div>
              </div>
              <div className="flex flex-col items-start">
                {message.isRead && (
                  <img
                    src="/dot.svg"
                    alt="Read indicator"
                    className="w-2 h-2"
                  />
                )}
                <p className="text-sm text-gray-500">{message.time}</p>
              </div>
            </div>
          ))}
        </div>
      {/* </div> */}
    </nav>
  );
};

export default ChatNav;
