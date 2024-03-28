"use client";

import Form from "@/components/Form";
import Spinner from "@/components/Spinner";
import { validateNoteForm } from "@/utils/validations/noteFormValidate";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const CreateNotePage = () => {
  const { data: session, status } = useSession();
  const [formData, setFormData] = useState({
    title: "",
    note: "",
  });
  const [error, setError] = useState({
    title: "",
    note: "",
  });
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const InputChange = (e) => {
    const { value, id } = e.target;
    setFormData({ ...formData, [id]: value });
    setError({ ...error, [id]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const errors = validateNoteForm(formData);
    if (Object.keys(errors).length === 0) {
      try {
        const res = await fetch("/api/notes/new", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: formData.title,
            note: formData.note,
            creator: session?.user.id,
          }),
        });

        if (res.ok) {
          setError("");
          router.push("/");
          alert("Note successfully created...!");
        }
      } catch (err) {
        alert("Something went wrong, try again!");
        console.log(err);
        setLoading(false);
      }
    } else {
      setError(errors);
      setLoading(false);
    }
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
