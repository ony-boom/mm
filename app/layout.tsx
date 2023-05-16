import "./globals.css";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "800"] });

export const metadata = {
  title: "mm | 👀",
  description: "Send or anonymous message",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="grid place-items-center min-h-screen container m-auto p-8 max-h-screen overflow-y-auto">
          <div className="flex flex-col gap-8 max-w-[490px] w-full">
            <h1 className="text-4xl font-bold leading-snug sticky top-0">
              <Link href="/">mm</Link>
              <small className="text-xs block">
                <code>send or get anonymous message 👀</code>
              </small>
            </h1>

            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
