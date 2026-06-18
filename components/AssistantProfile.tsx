import { portfolio } from "@/lib/portfolio";
import Image from "next/image";

type AssistantProfileProps = {
    createdAt?: number;
};


export default function AssistantProfile({ createdAt }: AssistantProfileProps) {
    return (
        <div className="flex items-center gap-2 mb-2">
            <Image
                src="/avatar.jpg"
                alt={portfolio.name}
                width={24}
                height={24}
                className="rounded-full border"
            />

            <h3 className="text-sm font-semibold text-gray-500">
                {portfolio.name}
            </h3>

            {createdAt && (
                <span className="text-xs text-gray-400">
                    {new Date(createdAt).toLocaleTimeString([], {
                        hour: "numeric",
                        minute: "2-digit",
                    })}
                </span>
            )}
        </div>
    );
}