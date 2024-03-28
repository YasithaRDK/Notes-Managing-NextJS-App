import { Schema, model, models } from "mongoose";

const NoteSchema = new Schema(
  {
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Creator is required"],
    },
    title: {
      type: String,
      required: [true, "Title is required."],
      max: 30,
    },
    note: {
      type: String,
      required: [true, "Note is required."],
    },
  },
  {
    timestamps: true,
  }
);

const Note = models.Note || model("Note", NoteSchema);

export default Note;
