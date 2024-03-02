import React, { useState } from "react";

const ChatInputs = ({sendMessage}) =>{

    const [value, setValue] = useState("");

    const handleSubmit = () => {
        if (value.trim() === "") return; // Trim whitespace before checking if value is empty
        sendMessage({ sender: "user", message: value });
        setValue("");
    };
    return (
        <div className="w-full bg-white bg-opacity-10 max-h-40 rounded-lg px-4
        py-4 overflow-auto relative">

            <textarea 
                onKeyDown={(e)=>{
                    e.keyCode === 13 && e.shiftKey === false && handleSubmit();
                }}
                rows={1} className="border-0 bg-transparent outline-none w-11/12" placeholder="Enter Prompt..." 
                value={value} type="text" onChange={(e=>{
                    setValue(e.target.value)
                })}
            />

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:cursor-pointer right-3 absolute top-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" onClick={handleSubmit} />
            </svg>


        </div>
    )
}

export default ChatInputs;