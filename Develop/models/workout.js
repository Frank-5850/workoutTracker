const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workOutSchema = new Schema({
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Please enter the type of exercise; resistance or cardio",
      },
      name: {
        type: String,
        trim: true,
        required: "Please enter exercise name",
      },
      duration: {
        type: Number,
        trim: true,
        required: "Please enter the duration of exercise",
      },
      weight: {
        type: Number,
        trim: true,
        required: "Please enter the weight lifted or current body weight",
      },
      reps: {
        type: Number,
        trim: true,
      },
      sets: {
        type: Number,
        trim: true,
      },
    },
  ],
  dayExercised: {
    type: Date,
    default: Date.now,
  },
});

const Workout = mongoose.model("Workout", workOutSchema);

module.exports = Workout;
