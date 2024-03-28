import connection from "@/utils/db";
import Note from "@/models/note";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    await connection();

    const notes = await Note.find({ creator: params.id }).sort({ _id: -1 });

    return new NextResponse(JSON.stringify(notes), { status: 200 });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};
