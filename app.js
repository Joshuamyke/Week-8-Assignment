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
app.get(`/`, (req, res) => {
   res.json("Server is working")
})


app.post("/register", async (req, res) => {
   const { name, age, email, } = req.body

   if (!name) {
      return res.status(400).json({ message: "Please input your name" })
   }

   const alreadyExisting = await Students.findOne({ name })

   if (alreadyExisting) {
      return res.status(400).json({ message: "This user already exist!" })
   }

   const newUser = new Students({ name, age, email, })

   await newUser.save()

   return res.status(200).json({
      message: "User Registration Successful",
      user: newUser
   })
})


// REQUEST 2

// POST Request #2: Create a /update-email POST route that updates a user's email by name
app.post('/update-email', async (req, res) => {
   try {
      const { name, email } = req.body;
      const user = await User.findOneAndUpdate({ name }, { email }, { new: true });
      if (!user) {
         return res.status(404).json({ message: 'User not found' });
      }
      res.json({ message: 'Email updated successfully' });
   } catch (err) {
      res.status(400).json({ message: 'Error updating email', error: err.message });
   }
});


app.post('/add-users', async (req, res) => {
   try {
      const users = req.body;
      const errors = [];
      for (const user of users) {
         try {
            await User.create(user);
         } catch (err) {
            errors.push({ error: err.message, user });
         }
      }
      if (errors.length > 0) {
         return res.status(400).json({ message: 'Error adding users', errors });
      }
      res.json({ message: 'Users added successfully' });
   } catch (err) {
      return res.status(400).json({ message: 'Error adding users', error: err.message });
   }
});