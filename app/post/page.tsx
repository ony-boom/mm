"use client";

import { Button, FormGroup } from "@/app/components";
import { FormEventHandler, Suspense, useState } from "react";
import { Message } from "@prisma/client";
import wretch from "wretch";
import Link from "next/link";
import Loading from "./loading";

export default function Post() {
  const [isPosting, setIsPosting] = useState(false);
  const [isPosted, setIsPosted] = useState({
    state: false,
    postedTo: "",
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const data = Object.fromEntries(formData) as unknown as Message;
    // data.to = data.to.replaceAll(" ", "_");

    setIsPosting(true);
    const createdMessage = (await wretch("/api/message")
      .post(data)
      .res((response) => {
        return response.json();
      })) as Message;

    setIsPosting(false);
    setIsPosted({
      postedTo: createdMessage.to,
      state: true,
    });
  };

  return (
    <Suspense fallback={<Loading />}>
      <section id="post-message" className="mt-4">
        <h2 className="text-xl">📤 Post message</h2>

        <form
          className="grid gap-8 mt-8"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col gap-8 w-full sm:flex-row">
            <FormGroup
              label="from:"
              autoFocus
              inputId="author"
              inputName="from"
              inputType="text"
            />


            <FormGroup
              label="to:"
              inputId="receiver"
              inputName="to"
              required
              inputType="text"
            />
          </div>

          <FormGroup
            label="message:"
            inputId="message"
            inputName="content"
            isTextArea
          />

          <div className="flex flex-col gap-2 form-group">
            <Button type="submit" buttonType="full" disabled={isPosting}>
              {isPosting ? "posting 📨" : "post 📤"}
            </Button>
          </div>
        </form>

        <div id="output" className="mt-8">
          {isPosted.state ? (
            <>
              <span>Message posted, you can see it </span>
              <Link
                href={`/get/${isPosted.postedTo}`}
                className="text-neutral-300 underline decoratext-neutral-300 hover:decoration-white hover:text-white"
                prefetch={false}
              >
                here ↗️
              </Link>
            </>
          ) : null}
        </div>
      </section>
    </Suspense>
  );
}
