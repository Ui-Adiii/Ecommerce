import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/mangodb.js"
import connectCloudinary from "./config/clodinary.js"
import userRouter from "./routes/user.route.js";

// App Config
const app = express();
const port = process.env.PORT || 4000;
connectDB();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // optional
app.use(cors());

//api endpoints
app.use('/api/user',userRouter);

app.get("/", (req, res) => {
  res.status(200).send("API Working");
});

app.listen(port,()=>{
  console.log('server started on:: '+port);
});
