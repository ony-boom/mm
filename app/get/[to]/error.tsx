"use client";

import { Button } from "@/app/components";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-red-400">Something went wrong! 😭</h2>

      <p>
        Sorry for that, you can post a message at <code>@💩guy</code> to blame
        the developer.
      </p>

      <Button
        buttonType="outlined"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  );
}
