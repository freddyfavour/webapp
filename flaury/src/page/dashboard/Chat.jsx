import { useState, useEffect } from "react";
import ChatNav from "../../components/dashboard/ChatNav";
import ChatComponent from "../../components/chat/ChatComponent";
import DashboardLayout from "../../components/dashboard/DashboardLayout";

const Chat = () => {
  const [isSmallViewport, setIsSmallViewport] = useState(
    window.innerWidth <= 900
  );
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [showChatComponent, setShowChatComponent] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallViewport(window.innerWidth <= 900);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSelectMessage = (message) => {
    setSelectedMessage(message);
    setShowChatComponent(true);
  };

  const handleBackToChatNav = () => {
    setShowChatComponent(false);
    setSelectedMessage(null);
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col lg:flex-row text-primary">
        <ChatNav onSelectMessage={handleSelectMessage} />
        <div className="w-full px-4 md:px-0 text-primary">
          {selectedMessage ? (
            <ChatComponent selectedMessage={selectedMessage} />
          ) : (
            <div className="h-full flex items-center justify-center">
              <p>Select a chat to start messaging</p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Chat;
