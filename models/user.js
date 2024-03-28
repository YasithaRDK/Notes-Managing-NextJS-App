import { Schema, models, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
      match: /^[A-Za-z0-9-_]+$/,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "email is required"],
      match: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
    },
    password: {
      type: String,
      required: [true, "email is required"],
    },
  },
  { timestamps: true }
);

export default models.User || model("User", userSchema);
