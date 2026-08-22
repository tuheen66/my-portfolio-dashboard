"use client";

import { getAllMessage } from "@/utils/actions/MessageService";
import { TMessage } from "@/utils/Types";
import { useEffect, useState } from "react";
import MessageCard from "./MessageCard";

const Messages = () => {
  const [messages, setMessages] = useState<TMessage[]>([]);

  useEffect(() => {
    async function loadMessage() {
      const data = await getAllMessage();
      setMessages(data);
    }
    loadMessage();
  }, []);

  return (
    <div>
        
      <div className="grid grid-cols-1 gap-4">
        {messages?.map((message: TMessage) => (
          <MessageCard key={message._id} message={message}></MessageCard>
        ))}
      </div>
    </div>
  );
};

export default Messages;
