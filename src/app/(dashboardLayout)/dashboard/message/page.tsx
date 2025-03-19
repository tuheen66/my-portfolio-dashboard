"use client";

import { fetchMessages } from "@/utils/actions/fetchMessage";
import { useEffect, useState } from "react";

type TMessage = {
  name: string;
  email: string;
  message: string;
  _id: string;
};

const MessageManagement = () => {
  const [messages, setMessages] = useState<TMessage[]>([]);

  useEffect(() => {
    async function loadMessage() {
      const data = await fetchMessages();
      setMessages(data);
    }
    loadMessage();
  }, []);

  
  

  return (
    <div className="min-h-screen my-12">
      <h1 className="text-center text-3xl mb-8 text-slate-700 dark:text-white">
        All Messages
      </h1>
      <div className="overflow-x-auto">
        <table className="table text-slate-900  dark:text-white bg-slate-400 dark:bg-slate-700">
          {/* head */}
          <thead className="text-slate-700  dark:text-white text-md  ">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              
            </tr>
          </thead>
          <tbody className="bg-slate-400 text-slate-900">
            {messages?.map(
              (
                message: {
                  name: string;
                  email: string;
                  message: string;
                  _id: string;
                },
                index: number
              ) => (
                <tr
                  className="bg-slate-400 text-slate-900 dark:bg-slate-700 dark:text-white "
                  key={index}
                >
                  <th>{index + 1}</th>
                  <td>{message.name}</td>
                  <td>{message.email}</td>
                  <td>{message.message}</td>
                  
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MessageManagement;
