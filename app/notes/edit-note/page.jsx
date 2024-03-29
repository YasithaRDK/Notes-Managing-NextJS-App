"use client";

import Form from "@/components/Form";
import Spinner from "@/components/Spinner";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { validateNoteForm } from "@/utils/validations/noteFormValidate";
import toast from "react-hot-toast";

const EditNotePage = () => {
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
  const searchParams = useSearchParams();
  const noteId = searchParams.get("id");

  useEffect(() => {
    const getPromptDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `/api/notes/${noteId}?userId=${session?.user?.id}`
        );
        const data = await response.json();

        setFormData({
          title: data.title,
          note: data.note,
        });
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    if (session?.user?.id && noteId) getPromptDetails();
  }, [session?.user?.id, noteId]);

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
        const res = await fetch(
          `/api/notes/${noteId}?userId=${session?.user?.id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: formData.title,
              note: formData.note,
            }),
          }
        );

        if (res.status === 404) {
          toast.error("Note not found");
          setLoading(false);
        } else if (res.status === 401) {
          toast.error("Unauthorized! you can update only your notes");
          setLoading(false);
        } else if (res.ok) {
          setError("");
          router.push("/");
          toast.success("Note successfully updated...!");
        }
      } catch (err) {
        toast.error("Something went wrong, try again!");
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
        name="Edit"
      />
    </div>
  );
};
export default EditNotePage;
