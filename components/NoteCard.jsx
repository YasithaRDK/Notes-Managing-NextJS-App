"use client";

import { BiTrashAlt } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { format } from "date-fns";
import Link from "next/link";

const NoteCard = ({ post, handleDelete }) => {
  return (
    <div className="w-full p-2 transition-all duration-300 transform bg-white shadow-lg rounded-xl flex flex-col h-72">
      <div className="p-2">
        <div className="flex items-center justify-between gap-3 mb-2">
          <h2 className="w-2/3 text-lg font-bold overflow-hidden">
            {post.title}
          </h2>
          <p className="w-1/3 text-xs font-semibold text-gray-600 ">
            {format(post.createdAt, "MMMM dd,yyyy")}
          </p>
        </div>
      </div>

      <div className="p-2 flex-grow overflow-y-auto">
        <p className="text-sm text-gray-600 whitespace-pre-wrap ">
          {post.note}
        </p>
      </div>

      <div className="flex justify-center m-2 border-t">
        <Link
          href={`/notes/edit-note?id=${post._id}`}
          className="px-3 py-1 rounded-md text-amber-500 hover:text-amber-600"
        >
          <FiEdit size={20} />
        </Link>
        <button
          type="button"
          className="px-3 py-1 text-red-500 rounded-md hover:text-red-600"
          onClick={() => handleDelete(post._id)}
        >
          <BiTrashAlt size={20} />
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
