import express from "express";
import User from "../models/User.js"
const router = express.Router();
router.post("/", async (req, res) => {
  const { name, email,message } = req.body;
  try {
    const user = await User.create(req.body);
    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

export default router;
