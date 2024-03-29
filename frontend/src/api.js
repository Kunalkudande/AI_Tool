export const fetchResponse = async (chat) =>{
    try{
        const response = await fetch('https://ai-tool-backend.vercel.app/', { 
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: chat.map((message)=> message.message).join(" \n ")
            })
        })

        const data = await response.json();
        return data;
    }
    catch(e){
        console.log(e);
        console.log("I am in api.js");
    }
}
