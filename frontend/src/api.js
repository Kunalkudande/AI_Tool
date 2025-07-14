export const fetchResponse = async (chat) => {
    try {
        const response = await fetch('https://gemini-backend-bot.vercel.app/generate-blog', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: chat.map((m) => m.message).join(" \n ")
            })
        });

        if (!response.ok) throw new Error(`Error: ${response.status}`);

        const data = await response.json();
        return data;
    } catch (e) {
        console.log("Error in API:", e);
    }
};
