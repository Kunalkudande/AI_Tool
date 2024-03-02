import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import env from "dotenv";
import { OpenAI } from 'openai';

const app = express();
env.config();

app.use(cors());
app.use(bodyParser.json());

const openai = new OpenAI({
    apiKey: process.env.API_KEY,
    organization: "org-gVbS0olDkgPJXGpBQC43ZxTz"
});

app.post("/", async (req, res) => {
    const { message } = req.body;
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{role: "assistant", content: message}],
            temperature: 1,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        });
        //res.send(response.choices[0].message.content)  //for postman request
        res.status(200).json({
            message: response.choices[0].message.content
        });
    } catch (e) {
        console.error("Error:", e);
        res.status(400).send("An error occurred while processing your request.");
    }
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
