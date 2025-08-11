import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongo_url = process.env.MONGO;

mongoose.connect(mongo_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("✅ Connected to MongoDB Successfully!");
})
.catch((error) => {
  console.error("❌ MongoDB Connection Error:", error.message);
});

export default mongoose;