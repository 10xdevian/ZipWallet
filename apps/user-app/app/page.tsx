import React from "react";

import styles from "./page.module.css";

import { Button } from "@ui/components/ui/button";

import LoginButton from "@ui/components/auth/login-button";

function page() {
  return (
    <div className="flex h-full justify-center items-center flex-col bg-[radial-gradient(ellipse_at_top, _var(--tw-gradient-stop))] from-sky-400 to-blue-800 space-y-10">
      <h1 className="text-5xl font-bold uppercase">Welcome to Home page of User App</h1>
      <LoginButton  >
        <Button  variant={"destructive"} size={"lg"}>
          Login
        </Button>
      </LoginButton>
    </div>
  );
}

export default page;
