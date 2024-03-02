import { useState } from "react";
import ChatBody from "./components/ChatBody.jsx";
import ChatInputs from "./components/ChatInputs.jsx";
import { useMutation } from "react-query";
import { fetchResponse } from "./api.js";

function App() {
  const [chat, setChat] = useState([]);

  const mutation = useMutation({
    mutationFn: () => {
      return fetchResponse(chat);
    },
    onSuccess: (data) =>
      setChat((prev) => [
        ...prev,
        { sender: "ai", message: (data?.message || '').replace(/^\n\n/, "")},
      ]),
  });

  const sendMessage = async (message) => {
    await mutation.mutate(message.message); // Trigger the mutation with the latest message
    setChat((prev) => [...prev, message]); // Update the local chat state with the latest message
  };

  return (
    <div className="bg-[#1A232E] h-screen py-6 relative sm:px-16 px-12 text-white overflow-hidden flex flex-col justify-between  align-middle">

      {/* header */}
      <div className="font-bold text-3xl text-center mb-3">
        CHATGPT
      </div>

      {/* body */}
      <div className="h-[90%] overflow-auto w-full max-w-4xl min-w-[20rem] py-8 px-4 self-center
      scrollbar-thumb-slate-400 scrollbar-thin scrollbar-track-gray-tranparent scrollbar-thumb-rounded-md">
        <ChatBody chat={chat} />
      </div>

      {/* footer */}
      <div className="w-full max-w-4xl min-w-[20rem] self-center">
        <ChatInputs sendMessage={sendMessage} />
      </div>

    </div>
  );
}

export default App;
