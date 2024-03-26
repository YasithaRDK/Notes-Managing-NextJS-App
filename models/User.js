import { Schema, models, model } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      match: /^[A-Za-z0-9-_]+$/,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default models.User || model("User", userSchema);
