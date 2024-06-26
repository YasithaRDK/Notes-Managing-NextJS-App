import mongoose from "mongoose";

const connect = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB Connected.");
  } catch (error) {
    throw new Error("Error connecting to DB");
  }
};

export default connect;
