import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import usersRoute from "./routes/users.js";


const app = express();
dotenv.config();

const port = process.env.PORT || 5000;

//mongo connections

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    // console.log('Connected to mongoDB');
  } catch (error) {
    throw error;
  }
}

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

mongoose.connection.on("connected", () => {
  console.log("mongoDB Connected!!!");
});


//middleware connections 
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/hotel", hotelsRoute);
app.use("/api/room", roomsRoute);
app.use("/api/user", usersRoute);

app.get("/", (req,res) => {
  res.send("Welcome to dreamdestin server")
})

app.listen(port, () => {
  main();
  console.log("app running on port:", port);
});
