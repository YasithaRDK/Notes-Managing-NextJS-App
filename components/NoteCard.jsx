"use client";

import { BiTrashAlt } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";

const NoteCard = () => {
  return (
    <div className="w-96 p-2 bg-white rounded-xl transform transition-all duration-300 shadow-lg">
      <div className="p-2">
        <div className="flex justify-between items-center mb-2 gap-3">
          <h2 className="font-bold text-lg w-2/3">
            Headingdas afsas asfsafs asdsad
          </h2>
          <p className="text-xs text-gray-600 w-1/3">Noted: 2021/10/12</p>
        </div>

        <p className="text-sm text-gray-600 whitespace-pre-wrap">
          Simple Yet Beautiful Card Design with TaiwlindCss. Subscribe to our
          Youtube channel for more ... Simple Yet Beautiful Card Design with
          TaiwlindCss. Subscribe to our Youtube channel for more ... Simple Yet
          Beautiful Card Design with TaiwlindCss. Subscribe to our Youtube
          channel for more ... channel for more ...
        </p>
      </div>

      <div className="m-2 flex justify-between">
        <a
          role="button"
          href="#"
          className="text-amber-500 px-3 py-1 rounded-md hover:text-amber-600"
        >
          <FiEdit />
        </a>
        <a
          role="button"
          href="#"
          className="text-red-500  px-3 py-1 rounded-md hover:text-red-600"
        >
          <BiTrashAlt />
        </a>
      </div>
    </div>
  );
};

export default NoteCard;
