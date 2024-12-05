import { PageProps } from "@/app/_component/Type";
import React from "react";

function Page({ params }: PageProps) {
  const { id } = params;

  if (isNaN(id)) {
    throw new Error("Incorrect type");
  }

  return <div>{id}</div>;
}

export default Page;
