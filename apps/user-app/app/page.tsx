import React from "react";

import styles from "./page.module.css";

import { Button } from "@ui/components/button";
import LoginButton from "@ui/components/login-button";

function page() {
  return (
    <div>
      <h1 className="text-9xl bg-red-400">Hello user</h1>
      <LoginButton>
        <Button variant={"default"} size={"lg"}>
          Workssss
        </Button>
      </LoginButton>
    </div>
  );
}

export default page;
