const router = require("express").Router();
const workoutDb = require("../models/workout");

router.get("/workouts", (req, res) => {
  workoutDb
    .aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: "$exercises.duration",
          },
        },
      },
    ])
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/workouts", (req, res) => {
  workoutDb
    .create({
      type: "",
      name: "",
      duration: 0,
      weight: 0,
      reps: 0,
      sets: 0,
    })
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/workouts/range", (req, res) => {
  workoutDb
    .aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: "$exercises.duration",
          },
        },
      },
    ])
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/workouts/:id", (req, res) => {
  workoutDb
    .findByIdAndUpdate(
      req.params.id,
      {
        $push: { exercises: req.body },
      },
      {
        new: true,
      }
    )
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
