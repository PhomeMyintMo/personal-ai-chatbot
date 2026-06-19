import { ChatMessage } from "@/types/chat"
import AssistantProfile from "./AssistantProfile";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


type MessageProps = {
  message: ChatMessage
}

export default function Message({ message }: MessageProps) {
  const isUser = message.role === "user";
  return (
    <div className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}>
      {!isUser && <AssistantProfile createdAt={message.createdAt} />}

      <div className={`max-w-[75%] rounded-2xl px-4 py-3 mb-2 ${isUser
        ? "bg-blue-600 text-white"
        : message.isError ?
        "bg-red-100/10 text-red-500 "
        : "bg-zinc-200 text-zinc-900 dark:bg-zinc-800 dark:text-white"
        }`}>
        <article className="prose prose-sm dark:prose-invert max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {message.content}
          </ReactMarkdown>
        </article>

      </div>
    </div>
  )
}