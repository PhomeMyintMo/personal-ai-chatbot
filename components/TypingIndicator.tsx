import AssistantProfile from "./AssistantProfile"

export default function TypingIndicator() {
  return (
    <div className="flex flex-col items-start">
      <AssistantProfile/>
      <div className="rounded-2xl bg-zinc-200 dark:bg-zinc-800 px-4 py-3">
        <div className="flex gap-1">
          <span className="h-2 w-2 animate-bounce rounded-full bg-gray-500" />
          <span
            className="h-2 w-2 animate-bounce rounded-full bg-gray-500"
            style={{ animationDelay: "0.2s" }}
          />
          <span
            className="h-2 w-2 animate-bounce rounded-full bg-gray-500"
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </div>
    </div>
  );
}