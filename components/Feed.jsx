"use client";

import NoteCard from "./NoteCard";

const Feed = () => {
  return (
    <div className="flex flex-wrap justify-center w-full gap-4 mt-10 mb-10 bg-gray-100">
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
      <NoteCard />
    </div>
  );
};

export default Feed;
