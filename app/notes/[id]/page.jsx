"use client";

import Form from "@/components/Form";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const EditNotePage = () => {
  const { data: session, status } = useSession();

  if (status !== "authenticated") {
    redirect("/login");
  }
  return (
    <div className="w-full min-h-screen px-5">
      <Form />
    </div>
  );
};
export default EditNotePage;
