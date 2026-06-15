import mongoose from "mongoose";
const db = async () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/Protfolio")
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.log("Database connection errro " + err);
    });
};

export default db;
