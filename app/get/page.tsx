"use client";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";
import { Button, FormGroup } from "@/app/components";

export default function Page() {
  const [messageToInputValue, setMessageToInputValue] = useState("");
  const router = useRouter();

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const { value } = event.target;
    setMessageToInputValue(value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const to = `/get/${messageToInputValue}`;

    await router.push(to);
  };

  return (
    <section id="get-message" className="mt-4">
      <h2 className="text-xl">📤 Get message</h2>

      <form
        onSubmit={handleSubmit}
        className="grid gap-8 mt-8"
        autoComplete="off"
      >
        <FormGroup
          label="Your name:"
          required
          inputType="text"
          inputId="getMessage"
          inputName="to"
          autoFocus
          onChange={handleInputChange}
          value={messageToInputValue}
        />

        <div className="flex flex-col gap-2 form-group">
          <Button type="submit" buttonType="full">
            get
          </Button>
        </div>
      </form>
    </section>
  );
}
