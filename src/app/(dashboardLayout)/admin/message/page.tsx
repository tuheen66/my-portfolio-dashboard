import Messages from "@/components/Messages/Messages";

const MessageManagementPage = () => {
  return (
    <div className="min-h-screen my-12 w-[90%] mx-auto">
      <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-white mb-6">
          All Messages
        </h2>
      <Messages />
    </div>
  );
};

export default MessageManagementPage;
