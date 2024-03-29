import React, { useEffect, useRef } from "react";

const ChatBody = ({chat}) => {
    const aiStyle = "bg-white bg-opacity-40 backdrop-blur-lg dropshadow-md mr-auto";

    const bottonRef = useRef(null);

    useEffect(()=>{
        bottonRef.current?.scrollIntoView({behavior:"smooth"})
    }, [chat]);
return <>
    <div className="flex flex-col gap-4">
        {chat.map((message, i)=>{
            return (
                 <div key={i} className={`border-[#999999] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%] ${message.sender === "ai" && aiStyle}`}>
                    <pre className="whitespace-pre-wrap">
                         <span>{message.message}</span>
                     </pre>

                 </div>
            )
         })}

         <div ref={bottonRef} className="h-3"></div>
    </div>
</>
}

export default ChatBody;