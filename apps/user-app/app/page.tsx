import React from "react";
import { Demo } from "@repo/ui/Demo";

// import { prisma } from "@repo/db/client";
// import { userSchema } from "@repo/zod-schema";


function page() {
  return (
    <div>
      <h1 className="text-3xl text-yellow-500">User app</h1>
      <Demo />
    </div>
  );
}

export default page;
