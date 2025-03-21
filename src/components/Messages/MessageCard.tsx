import { TMessage } from "@/utils/Types";

const MessageCard = ({ message }: { message: TMessage }) => {
  return (
    <div className="bg-slate-400 text-slate-900 dark:bg-slate-700 dark:text-white p-4 rounded-lg ">
      <h3>Sent by: {message.name}</h3>
      <h3>Email: {message.email}</h3>
      <p>Message: {message.message}</p>
    </div>
  );
};

export default MessageCard;
