"use client";

import { BiTrashAlt } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { format } from "date-fns";

const NoteCard = ({ post }) => {
  return (
    <div className="w-full p-2 transition-all duration-300 transform bg-white shadow-lg rounded-xl flex flex-col h-80">
      <div className="p-2">
        <div className="flex items-center justify-between gap-3 mb-2">
          <h2 className="w-2/3 text-lg font-bold ">{post.title}</h2>
          <p className="w-1/3 text-sm font-semibold text-gray-600">
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
        <a
          role="button"
          href="#"
          className="px-3 py-1 rounded-md text-amber-500 hover:text-amber-600"
        >
          <FiEdit size={20} />
        </a>
        <a
          role="button"
          href="#"
          className="px-3 py-1 text-red-500 rounded-md hover:text-red-600"
        >
          <BiTrashAlt size={20} />
        </a>
      </div>
    </div>
  );
};

export default NoteCard;
