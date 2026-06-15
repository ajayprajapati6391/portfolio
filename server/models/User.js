import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name field required"],
  },

  email: {
    type: String,
    required: [true, "Email field required"],
  },

  message: {
    type: String,
    required: [true, "Message field required"],
  },
},{timestamps:true});

const User = mongoose.model("User", userSchema);
export default User;
