var express = require("express");
var router = express.Router();
const uploadCloud = require("../config/uploadCloud");

// Tour model
const Tour = require("../models/Tour");

// User model
const User = require("../models/User");

// Mountain model
const Mountain = require("../models/Mountain");

// definiamo object ID da usare in your tours
const ObjectId = require("mongodb").ObjectId;

//* POST CREATE TOUR *//

// uploadCloud e' un middlewaer e serve per gestire i file che non sono testo
router.post("/create-tour", uploadCloud.array("picture"), (req, res) => {
  const {
    mountainName,
    mountainId,
    snowQuality,
    snowDepth,
    recomended,
    description,
    date
  } = req.body;
  console.log(req.files, "req file");
  // creiamo un new tour per poter accedere alla proprieta ._id, abbiamo cretato un nuovo documento che salviamo e lo rendiamo disponibile per sotto
  // con new tour stiamo dicendo che myTour e' un nuovo modello/schema (come e' Tour.js)

  // if condition in case we upload a tour with no picture (to avoid error when reading req.file.url)
  let tourFoto = [];

  if (req.files) {
    req.files.forEach(file => tourFoto.push(file.url));
  } else {
    tourFoto =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png";
  }
  console.log(tourFoto, "trova");
  const myTour = new Tour({
    mountainName,
    mountainId,
    user: req.session.currentUser._id,
    picture: tourFoto,
    snowQuality,
    snowDepth,
    recomended,
    description,
    date
  });

  // salviamo il myTour in MongoDB
  const tour = myTour.save();

  const user = User.findByIdAndUpdate(
    req.session.currentUser._id,
    // adesso possiamo accedere a myTour._id e spingere l id in user schema
    { $push: { tours: myTour._id } },
    { new: true }
  );

  // spingiamo l ID del tour creato dentro lo schema/database montagne
  const mountain = Mountain.findByIdAndUpdate(
    mountainId,
    // adesso possiamo accedere a myTour._id e spingere l id in user schema
    { $push: { tours: myTour._id } },
    { new: true }
  );

  // promise all risolve il problema del then catch asincrono, aspetta che tutte le promises vengano soddisfatte
  Promise.all([tour, user, mountain])
    .then(tour => {
      console.log(myTour);
      console.log(req.session.currentUser, "current user");
      res.status(200).json({ message: "Tour created", tour });
    })
    .catch(error => {
      res.status(401).json({ message: "Something went wrong", error });
      console.log(error);
    });
});

// collega il database mountain e il client, da usare poi con axios per richiamare le montagne
router.get("/mountains", (req, res) => {
  Mountain.find()
    .then(mountains => {
      res.status(200).json({ message: "Mountains received", mountains });
    })
    .catch(error => {
      res.status(401).json({ message: "Error", error });
    });
});

// POST PROFILE INFO and PICTURE//
router.post(
  "/profile",
  uploadCloud.single("profilePicture"),

  async (req, res, next) => {
    let { name, surname, age, skiLevel, about } = req.body;

    let profilePicture;

    if (req.file) {
      profilePicture = req.file.url;
    } else {
      profilePicture =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png";
    }

    if (req.body.name == "") {
      name = req.session.currentUser.name;
    }
    if (req.body.surname == "") {
      surname = req.session.currentUser.surname;
    }
    if (req.body.age == "") {
      age = req.session.currentUser.age;
    }
    if (req.body.skiLevel == "") {
      skiLevel = req.session.currentUser.skiLevel;
    }
    if (req.body.about == "") {
      about = req.session.currentUser.about;
    }

    try {
      await User.findByIdAndUpdate(
        req.session.currentUser._id,
        {
          profilePicture: profilePicture,
          name: name,
          surname: surname,
          age: age,
          skiLevel: skiLevel,
          about: about
        },
        { new: true }
      );
      res.status(200).json({
        profilePicture: profilePicture,
        name: name,
        surname: surname,
        age: age,
        skiLevel: skiLevel,
        about: about
      });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
);

// collega il database TOURS con il client, da usare poi con axios per richiamare i tours
router.get("/all-tours", (req, res) => {
  Tour.find()
    .populate("mountainId")
    .then(tours => {
      res.status(200).json({ message: "Tours received", tours });
    })
    .catch(error => {
      res.status(401).json({ message: "Error", error });
    });
});

// collega il database TOURS con il client, da usare poi con axios per richiamare i tuoi tour filtrati su user ID
router.get("/your-tours", (req, res) => {
  Tour.find({ user: ObjectId(req.session.currentUser._id) })
    .populate("mountainId")
    .then(tours => {
      res.status(200).json({ message: "Tours received", tours });
    })
    .catch(error => {
      console.log(error);
      res.status(401).json({ message: "Error", error });
    });
});

// rout per filtro date, req.query per avere le info dalla URL dopo il "?"
router.get("/tours-by-date", (req, res) => {
  const {
    userTours, //"true" || "false"
    location,
    difficulty,
    snowQuality,
    recomended,
    todayDate,
    startDate
  } = req.query;
  console.log(req.query, "req query");

  let dbQuery = {};
  if (startDate && todayDate)
    datedbQueryQ = {
      date: { $gte: startDate, $lt: todayDate }
    };

  if (userTours === "true") dbQuery.user = req.session.currentUser._id;

  console.log(dateQ);

  Tour.find(dbQuery)
    .populate("mountainId")
    .then(tours => {
      let filteredTours = tours
        .filter(tour => {
          if (!snowQuality) return true;
          return tour.snowQuality
            .toUpperCase()
            .includes(snowQuality.toUpperCase());
        })
        .filter(tour => {
          if (!location) return true;
          return tour.mountainId.location
            .toUpperCase()
            .includes(location.toUpperCase());
        })
        .filter(tour => {
          if (!difficulty) return true;
          return (
            tour.mountainId.difficulty.toUpperCase() == difficulty.toUpperCase()
          );
        })
        .filter(tour => {
          if (!recomended) return true;
          return tour.recomended
            .toUpperCase()
            .includes(recomended.toUpperCase());
        });

      res.status(200).json({ message: "Tours received", tours: filteredTours });
    })
    .catch(error => {
      console.log(error, "error");
      res.status(401).json({ message: "Error", error });
    });
});

// usiamo req params per creare i link n modo dinamico (params sono la parte di url che cambia)

router.get("/tour/:id", (req, res) => {
  Tour.findById(req.params.id)
    .populate("mountainId")
    .then(tour => {
      res.status(200).json({ message: "Tours received", tour });
    })
    .catch(error => {
      res.status(401).json({ message: "Error", error });
    });
});

// POST create COMMENTS //

router.post("/create-comment", (req, res) => {
  const { message, tourId } = req.body;
  console.log(req.body);
  const comment = { message, username: req.session.currentUser.username };
  Tour.findByIdAndUpdate(
    tourId,

    { $push: { comments: comment } },
    { new: true }
  )
    .then(comment => {
      res.status(200).json({ message: "comment received", comment });
    })
    .catch(error => {
      console.log(error);
      res.status(401).json({ message: "Error", error });
    });
});

module.exports = router;
