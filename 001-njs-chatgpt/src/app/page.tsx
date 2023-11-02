import Chat from '@/components/chat'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='bg-slate-800 p-3 w-[800px] rounded-md text-white'>
        <h2 className='text-2xl'>GPT4 Streaming Chat Application</h2>
        <Chat />
      </div>
    </main>
  )
}
