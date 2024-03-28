"use client";

import { useRouter } from "next/navigation";
import NoteCard from "./NoteCard";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const Feed = ({ setLoading, session }) => {
  const router = useRouter();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/notes`);
      const data = await response.json();

      setNotes(data);
    };

    if (session?.user.id) {
      fetchPosts();
    }
  }, []);

  return (
    <div className=" w-5/6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-20">
      {notes && notes.length > 0 ? (
        notes.map((note, index) => <NoteCard key={index} post={note} />)
      ) : (
        <></>
      )}
    </div>
  );
};

export default Feed;
