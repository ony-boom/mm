import { formatDistance } from "date-fns";

export function Message({
  creationDate,
  id,
  sender,
  content,
  receiver,
}: MessageProps) {
  const now = new Date();
  const formattedDate = formatDistance(creationDate, now, {
    addSuffix: true,
  });

  return (
    <div
      className="message border border-neutral-400 rounded-md p-6 flex flex-col gap-8 transition-all hover:border-white"
      key={id}
      id={id}
    >
      <div className="flex justify-between items-center">
        <p className="flex sm:items-center sm:font-semibold gap-2 leading-snug font-light text-sm sm:text-md">
          <span
            className="max-w-[48px] sm:max-w-max text-ellipsis overflow-hidden whitespace-nowrap text-md"
            title={sender ?? ""}
          >
            {sender ?? "🥷"}
          </span>
          <span>{"->"}</span>
          <span
            className="max-w-[64px] sm:max-w-max text-ellipsis overflow-hidden whitespace-nowrap"
            title={receiver}
          >
            {receiver}
          </span>
        </p>

        <p className="text-neutral-400 text-[12px] sm:text-xs">{formattedDate}</p>
      </div>

      <p>{content}</p>
    </div>
  );
}

type MessageProps = {
  content: string;
  sender: string | null;
  receiver: string;
  creationDate: Date;
  id: string;
};
