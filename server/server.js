import express from "express";
import cors from 'cors'
import db from './config/dbConnect.js'
const app = express();
import userRoute from './routes/userRoute.js'

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// database connection
db() 
app.use("/contact", userRoute);

app.listen(5000, () => {
  console.log("server is running http://localhost:5000");
});
