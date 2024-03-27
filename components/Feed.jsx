"use client";

import { useRouter } from "next/navigation";
import NoteCard from "./NoteCard";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const Feed = ({ setLoading }) => {
  const router = useRouter();
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/notes`);
      const data = await response.json();

      setPosts(data);
      setLoading(false);
    };

    if (session?.user.id) {
      fetchPosts();
    }
  }, []);

  console.log(posts);

  return (
    <div className="flex flex-wrap gap-4 mt-10 mb-10 bg-gray-100">
      {posts && posts.length > 0 ? (
        posts.map((post, index) => <NoteCard key={index} post={post} />)
      ) : (
        <></>
      )}
    </div>
  );
};

export default Feed;
