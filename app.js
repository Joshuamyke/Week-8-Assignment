const express = require("express")

const dotenv = require("dotenv")
const mongoose = require("mongoose")

const app = express()
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
   console.log(`Server Started Running at ${PORT}`)
})
app.use(express.json())
dotenv.config()

mongoose.connect(`${process.env.MONGODB_URL}`)


   .then(() => console.log("MongoDB was Connected..!"))

   const Students = require("./usermodel")

// CRUD AND SCHEMA




// POST Request #1: /add-user
app.get(`/`, (req, res) =>{
   res.json("Server is working")
})


