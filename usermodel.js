const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
      minlength: 3
   },
   email: {
      type: String,
      required: true,
      validate: {
         validator: function(v) {
            return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
         },
         message: '{VALUE} is not a valid email address'
      }
   },
   age: {
      type: Number,
      required: true,
      min: 18,
      max: 99
   }
});

const User = mongoose.model('User', userSchema);

module.exports = Students;                                                                                                  