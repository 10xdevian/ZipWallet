import React from "react";

import styles from "./page.module.css";

import { Button } from "@ui/components/ui/button";

import LoginButton from "@ui/components/auth/login-button";

function page() {
  return (
    <div>
      <h1 className="text-5xl">hello</h1>
      <LoginButton>
        <Button variant={"default"} size={"lg"}>
          Workssss
        </Button>
      </LoginButton>
    </div>
  );
}

export default page;
