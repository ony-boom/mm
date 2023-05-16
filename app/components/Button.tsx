import { ButtonsVariant, buttonsLikeClass } from "./shared";
import React from "react";

export const Button = ({
  buttonType,
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={
        buttonsLikeClass[buttonType] +
        " disabled:opacity-40 disabled:cursor-not-allowed " +
        className
      }
      {...props}
    >
      {children}
    </button>
  );
};

type ButtonProps = {
  children: React.ReactNode;
  buttonType: ButtonsVariant;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
