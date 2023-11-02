import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = 'edge';  // provide optimal infrastructure for our API route (https://edge-runtime.vercel.app)

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export async function POST(request: Request) {
    const { messages } = await request.json();

    console.log(messages)

    // GPT-4 system message
    // system message tells GPT4 how to act.
    // it should be always at the begining of your array of messages.

    // createchatCompletion (get response from GPT-4)
    const response = await openai.createChatCompletion({
        model: "gpt-4",
        stream: true,
        messages: [
            { role: "system", content: "You are a helpful assitant. You explain software concepts simply to intermediate programmers."},
            ...messages
        ],
    })

    // create a stream of data from Open AI (stream the data to front end)
    const stream = await OpenAIStream(response);

    // send the stream as a response to our client/frontend
    return new StreamingTextResponse(stream)
}