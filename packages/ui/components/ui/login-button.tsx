"use client";
import React, { ReactNode } from "react";

interface LoginProps {
  children: React.ReactNode;
  mode?: "redirect" | "modal";
  asChild?: boolean;
}

export default function LoginButton({
  children,
  mode = "redirect",
  asChild,
}: LoginProps) {
  const onClick = () => {
    console.log("LoginButton Clicked");
  };
  return (
    <span onClick={onClick} className=" cursor-pointer">
      {children}
    </span>
  );
}
