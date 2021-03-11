const router = require("express").Router();
const workoutDb = require("../models/workout");

router.get("/workouts", (req, res) => {
  console.log("hi");
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
  console.log("hello");
  workoutDb
    .create({})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/workouts/range", (req, res) => {
  console.log("hoy");
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
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/workouts/:id", (req, res) => {
  console.log("dahello");
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
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
