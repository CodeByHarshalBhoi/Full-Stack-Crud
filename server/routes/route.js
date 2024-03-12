import express from "express";
// import {addUser} from '../controller/user-controller'
import User from "./model/user-schema";
import Errors from "undici-types/errors";

const router = express.Router();

router.post("/add", async (req, res) => {
  const user = req.body;
  console.log(user);
  const newUser = new User(user);
  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(409).json({ message: err.message });
    console.log(err);
  }
});

router.get("/all", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const user = await User.find({ _id: req.params.id });
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  let user = req.body;
  const editUser = new User(user);

  try {
    await user.updateOne({ _id: req.params.id }, editUser);
    res.status(201).json(editUser);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await user.deleteOne({ _id: req.params.id });
    res.status(200).json({message: "user delete successfully"})
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
});
export default router;
