"use client"

import React from 'react'
import { useChat, Message } from 'ai/react'

export default function Chat() {

  const {input, handleInputChange, handleSubmit, isLoading, messages} = useChat();

  console.log(messages);
  console.log(input);

  return (
    <div>
      {messages.map((message: Message) => {
        return (
          <div key={message.id}>
            {/* Name of the person talking */}
            {
              message.role === "assistant"
              ?
              <h3 className='text-lg font-semibold mt-2'>GPT-4</h3>
              :
              <h3 className='text-lg font-semibold mt-2'>User</h3>
            }

            {/* Content of the message */}
            {
              message.content.split("\n").map((currentTextBlock: string, index: number) => {
                if (currentTextBlock === "") {
                  return <p key={message.id + index}>{" "}</p>
                } else {
                  return <p key={message.id + index}>{currentTextBlock}</p>
                }
              })
            }
          </div>
        )
      })}

      <form className='mt-12' onSubmit={handleSubmit}>
        <p>User Message</p>
        <textarea
          className='mt-2 w-full bg-slate-600 p-2'
          placeholder={"What are data structures and algorithms?"}
          value={input}
          onChange={handleInputChange}
        />
        <button className='rounded-md bg-blue-600 p-2 mt-2'>
          Send Message
        </button>
      </form>
    </div>
  )
}
