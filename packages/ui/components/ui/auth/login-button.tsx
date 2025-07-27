"use client";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  const onClick = () => {
    router.push("auth/login");

    console.log("LoginButton Clicked");
  };

  if (mode == "modal") {
    return <span>Modal is Implemented</span>;
  }
  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
}
