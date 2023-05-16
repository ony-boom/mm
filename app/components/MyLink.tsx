import Link, { LinkProps } from "next/link";
import { ButtonsVariant, buttonsLikeClass } from "./shared";

export const MyLink = ({ href, type, children, className }: MyLinkProps) => {
  return (
    <Link href={href} className={buttonsLikeClass[type] + (className || "")}>
      {children}
    </Link>
  );
};

type MyLinkProps = {
  children: React.ReactNode;
  type: ButtonsVariant;
  className?: string;
} & LinkProps;
