"use client";

import { useRouter } from "next/navigation";
import NoteCard from "./NoteCard";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import Link from "next/link";
import toast from "react-hot-toast";

const Feed = ({ session }) => {
  const router = useRouter();
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/users/${session?.user.id}/notes`);
        const data = await response.json();

        setNotes(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    if (session?.user.id) {
      fetchPosts();
    }
  }, [session?.user?.id]);

  const handleDelete = async (noteId) => {
    const hasConfirmed = confirm("Are you sure you want to delete this note?");
    if (hasConfirmed) {
      setLoading(true);
      try {
        const res = await fetch(
          `/api/notes/${noteId}?userId=${session?.user?.id}`,
          {
            method: "DELETE",
          }
        );
        if (res.status === 404) {
          toast.error("Note not found");
          setLoading(false);
        } else if (res.status === 401) {
          toast.error("Unauthorized! you can delete only your notes");
          setLoading(false);
        } else if (res.ok) {
          const filteredNotes = notes.filter((item) => item._id !== noteId);

          setNotes(filteredNotes);
          toast.success("Note deleted successfully");
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong! try again");
        setLoading(false);
      }
    }
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {notes && notes.length > 0 ? (
            <div className="grid w-full grid-cols-1 gap-4 my-20 xl:w-5/6 md:grid-cols-2 lg:grid-cols-3">
              {notes.map((note, index) => (
                <NoteCard key={index} post={note} handleDelete={handleDelete} />
              ))}
            </div>
          ) : (
            <>
              <p className="w-2/4 mt-16 text-xl text-center text-indigo-500 lg:w-1/4">
                Click the button below and add your first note
              </p>
              <Link href="/notes/create-note" className="mt-5 black_btn">
                Click Me
              </Link>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Feed;
