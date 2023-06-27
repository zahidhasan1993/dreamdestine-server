import express from "express";
import Hotel from "../models/Hotel.js";

const router = express.Router();
// add hotel
router.post("/", async (req, res) => {
  const hotel = new Hotel(req.body);
  const newHotel = await hotel.save();
  res.status(200).json(newHotel);
});

//update hotel
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const updateHotel = await Hotel.findByIdAndUpdate(
    id,
    { $set: req.body },
    { new: true }
  );
  res.status(200).json(updateHotel);
});
//delete hotel
router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  await Hotel.findByIdAndDelete(id);
  res.status(200).json("Hotel deleted");
});

//get hotel
router.get("/:id", async (req, res) => {
  const id = req.params.id;

  const hotel = await Hotel.findById(id);
  res.status(200).json(hotel);
});
//get all hotel
router.get("/:id", async (req, res) => {
  const hotels = await Hotel.find();
  res.status(200).json(hotels);
});
export default router;
