require('dotenv').config();
const express =require('express');
const app=express();
const cors=require("cors");
const connection =require('./db');
 const userRoutes =require('./models/routes/users');
 const authRoutes =require('./models/routes/auth');

//db connection
connection()
//middlewares
app.use(express.json())
app.use(cors());
//routes 
app.use("/api/users",userRoutes);
app.use("api/auth",authRoutes);
const port=process.env.port || 8080;
app.listen(port,()=> console.log(`listening on port ${port}...`));