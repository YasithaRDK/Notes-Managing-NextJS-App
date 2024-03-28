"use client";

import { useRouter } from "next/navigation";
import NoteCard from "./NoteCard";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import Link from "next/link";

const Feed = ({ session }) => {
  const router = useRouter();
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const response = await fetch(`/api/users/${session?.user.id}/notes`);
      const data = await response.json();

      setNotes(data);
      setLoading(false);
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
        if (res.status === 400) {
          alert("Note not found");
          setLoading(false);
        } else if (res.status === 401) {
          alert("Unauthorized! you can delete only your notes");
          setLoading(false);
        } else if (res.ok) {
          const filteredNotes = notes.filter((item) => item._id !== noteId);

          setNotes(filteredNotes);
          alert("Note deleted successfully");
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
        alert("Something went wrong! try again");
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
            <div className=" md:w-5/6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-20">
              {notes.map((note, index) => (
                <NoteCard key={index} post={note} handleDelete={handleDelete} />
              ))}
            </div>
          ) : (
            <>
              <p className="text-center text-indigo-500 mt-16 text-xl w-2/4 lg:w-1/4">
                Stay with us and post your note by clicking the Create button
              </p>
              <Link href="/notes/create-note" className="black_btn mt-5">
                Create
              </Link>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Feed;
