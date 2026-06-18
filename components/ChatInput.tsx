import { Send } from "lucide-react";

type ChatInputProps = {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  isLoading: boolean;
};

export default function ChatInput({
  value,
  onChange,
  onSend,
  isLoading,
}: ChatInputProps) {
  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  }

  const isEmpty = value.trim().length === 0;

  return (
    <div className="border-t  p-4">
      <div className="relative">
        <textarea
          className="w-full resize-none rounded-lg border p-2 pr-14 outline-none"
          rows={2}
          placeholder="Ask me anything about me..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
        />

        <button
          type="button"
          onClick={onSend}
          disabled={isLoading || isEmpty}
          className="absolute bottom-4 right-3 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  );
}