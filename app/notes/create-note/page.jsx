"use client";

import Form from "@/components/Form";
import Spinner from "@/components/Spinner";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";

const CreateNotePage = () => {
  const { data: session, status } = useSession();

  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    desc: "",
  });

  const [error, setError] = useState({
    title: "",
    desc: "",
  });

  const [loading, setLoading] = useState(false);

  const InputChange = (e) => {
    const { value, id } = e.target;
    setFormData({ ...formData, [id]: value });
    setError({ ...error, [id]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (status === "loading" || loading) {
    return <Spinner />;
  } else if (status !== "authenticated") {
    router.push("/");
  }

  return (
    <div className="w-full px-5">
      <Form
        formData={formData}
        error={error}
        onChange={InputChange}
        onSubmit={handleSubmit}
        name="Create"
      />
    </div>
  );
};
export default CreateNotePage;
