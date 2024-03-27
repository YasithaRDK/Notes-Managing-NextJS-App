import connection from "@/utils/db";
import Note from "@/models/note";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { title, note, creator } = await request.json();
  try {
    await connection();
    const newNote = new Note({ title, note, creator });

    await newNote.save();
    return new NextResponse("Note is added successfully", { status: 201 });
  } catch (error) {
    return new NextResponse(error, { status: 500 });
  }
};
