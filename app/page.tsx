import { MyLink } from "@/app/components";

export default function Home() {
  return (
    <div className="mt-4">
      <p className="text-neutral-100">
        Well post is for <em>posting</em> a message for someone, and{" "}
        <em>get</em> is just to see if someone posted you a message.
      </p>

      <div className="flex mt-8 gap-4 items-center">
        <MyLink type="full" href="/post">
          post
        </MyLink>

        <MyLink type="outlined" href="/get">
          get
        </MyLink>
      </div>
    </div>
  );
}
