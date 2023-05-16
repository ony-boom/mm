import { prisma } from "@/prisma/client";
import { Message } from "@prisma/client";
import { Message as MessageComponent } from "@/app/components";
import Loading from "./loading";
import { Suspense } from "react";

const getMessageTo = async (to: string) => {
  const receiver = decodeURI(to);

  return (await prisma.message.findMany({
    where: {
      to: {
        equals: receiver,
        mode: "insensitive",
      },
    },
  })) as Message[];
};
export default async function Page({
  params: { to },
}: {
  params: { to: string };
}) {
  const relatedMessage = await getMessageTo(to);
  const isEmpty = relatedMessage.length === 0;

  return (
    <div className="messageList flex flex-col gap-10 mt-8">
      <Suspense fallback={<Loading length={relatedMessage.length} />}>
        {isEmpty ? (
          <p>No one have sent you a message 😭</p>
        ) : (
          relatedMessage.map((m) => (
            <MessageComponent
              id={m.id}
              key={m.id}
              content={m.content}
              creationDate={m.createdAt}
              receiver={m.to}
              sender={m.from}
            />
          ))
        )}
      </Suspense>
    </div>
  );
}
