// Seeds file that remove all users and create 2 new users
// To execute this seed, run from the root of the project
// $ node bin/seeds.js
const mongoose = require("mongoose");

const Mountain = require("../models/Mountain");

// Connect to MONGODB
mongoose
  .connect("mongodb://localhost:27017/skialp", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(connection => {
    console.log("succesfully connected");
  })
  .catch(err => {
    console.log(err);
  });

let mountain = [
  {
    mountainName: "Breithorn Occidentale",
    location: "Alpi Occidentali",
    height: 4165,
    elevationGain: 1315,
    link:
      "https://www.planetmountain.com/snow/ski/itinerari/scheda.php?lang=ita&id_tipologia=32&comefrom=search&id_itinerario=26&gruppo=&area=&cima=&nome=",
    difficulty: "BSA",
    region: "Piemonte"
  },
  {
    mountainName: "Cevedale",
    location: "Alpi Retiche",
    height: 3769,
    elevationGain: 1590,
    link:
      "https://www.planetmountain.com/snow/ski/itinerari/scheda.php?lang=ita&id_tipologia=32&comefrom=search&id_itinerario=1551&gruppo=&area=&cima=&nome=",
    difficulty: "MSA/BSA",
    region: "Trentino Alto Adige"
  },
  {
    mountainName: "Castore",
    location: "Alpi Occidentali",
    height: 4221,
    elevationGain: 1315,
    link:
      "https://www.planetmountain.com/snow/ski/itinerari/scheda.php?lang=ita&id_tipologia=32&comefrom=search&id_itinerario=29&gruppo=&area=&cima=&nome=",
    difficulty: "OSA",
    region: "Piemonte"
  },
  {
    mountainName: "Roccia Nera",
    location: "Alpi Occidentali",
    height: 3734,
    elevationGain: 1315,
    link:
      "https://www.planetmountain.com/snow/ski/itinerari/scheda.php?lang=ita&id_tipologia=32&comefrom=search&id_itinerario=27&gruppo=&area=&cima=&nome=",
    difficulty: "OSA",
    region: "Piemonte"
  },
  {
    mountainName: "Punta Vermoi",
    location: "Alpi Retiche",
    height: 2934,
    elevationGain: 1300,
    link:
      "https://www.planetmountain.com/snow/ski/itinerari/scheda.php?lang=ita&id_tipologia=32&comefrom=search&id_itinerario=46&gruppo=&area=&cima=&nome=",
    difficulty: "BSA",
    region: "Trentino Alto Adige"
  },
  {
    mountainName: "Pisgana",
    location: "Alpi Retiche",
    height: 3107,
    elevationGain: 600,
    link:
      "https://www.planetmountain.com/snow/ski/itinerari/scheda.php?lang=ita&id_tipologia=32&comefrom=search&id_itinerario=940&gruppo=&area=&cima=&nome=",
    difficulty: "MSA",
    region: "Lombardia"
  },
  {
    mountainName: "Pisganino",
    location: "Alpi Retiche",
    height: 2933,
    elevationGain: 400,
    link:
      "https://www.planetmountain.com/snow/ski/itinerari/scheda.php?lang=ita&id_tipologia=32&comefrom=search&id_itinerario=941&gruppo=&area=&cima=&nome=",
    difficulty: "MSA",
    region: "Lombardia"
  },
  {
    mountainName: "Forcella Laghet",
    location: "Dolomiti",
    height: 2765,
    elevationGain: 1050,
    link:
      "https://www.planetmountain.com/snow/ski/itinerari/scheda.php?lang=ita&id_tipologia=32&comefrom=search&id_itinerario=10&gruppo=&area=&cima=&nome=",
    difficulty: "OSA",
    region: "Veneto"
  },
  {
    mountainName: "Forcella Lavinâl di Pálas",
    location: "Alpi Orientali",
    height: 2058,
    elevationGain: 117,
    link:
      "https://www.planetmountain.com/snow/ski/itinerari/scheda.php?lang=ita&id_tipologia=32&comefrom=search&id_itinerario=925&gruppo=&area=&cima=&nome=",
    difficulty: "BS",
    region: "Friuli Venezia Giulia"
  },
  {
    mountainName: "Forcella Marmolada",
    location: "Dolomiti",
    height: 2897,
    elevationGain: 400,
    link:
      "https://www.planetmountain.com/snow/ski/itinerari/scheda.php?lang=ita&id_tipologia=32&comefrom=search&id_itinerario=14&gruppo=&area=&cima=&nome=",
    difficulty: "BS",
    region: "Trentino Alto Adige"
  },
  {
    mountainName: "Forcella Mosè dalla Spragna",
    location: "Alpi Giulie",
    height: 2271,
    elevationGain: 1267,
    link:
      "https://www.planetmountain.com/snow/ski/itinerari/scheda.php?lang=ita&id_tipologia=32&comefrom=search&id_itinerario=55&gruppo=&area=&cima=&nome=",
    difficulty: "OSA",
    region: "Friuli Venezia Giulia"
  },
  {
    mountainName: "Cima Marmotta",
    location: "Alpi Retiche",
    height: 3330,
    elevationGain: 1300,
    link:
      "https://www.planetmountain.com/snow/ski/itinerari/scheda.php?lang=ita&id_tipologia=32&comefrom=search&id_itinerario=51&gruppo=&area=&cima=&nome=",
    difficulty: "MS",
    region: "Trentino Alto Adige"
  },
  {
    mountainName: "Cima Nassere",
    location: "Dolomiti",
    height: 2253,
    elevationGain: 800,
    link:
      "https://www.planetmountain.com/snow/ski/itinerari/scheda.php?lang=ita&id_tipologia=32&comefrom=search&id_itinerario=1018&gruppo=&area=&cima=&nome=",
    difficulty: "MSA",
    region: "Trentino Alto Adige"
  },
  {
    mountainName: "Cima Soran",
    location: "Dolomiti",
    height: 2398,
    elevationGain: 1350,
    link:
      "https://www.planetmountain.com/snow/ski/itinerari/scheda.php?lang=ita&id_tipologia=32&comefrom=search&id_itinerario=2050&gruppo=&area=&cima=&nome=",
    difficulty: "BS",
    region: "Trentino Alto Adige"
  },
  {
    mountainName: "Cima di Bò",
    location: "Alpi Pennine",
    height: 2556,
    elevationGain: 1524,
    link:
      "https://www.planetmountain.com/snow/ski/itinerari/scheda.php?lang=ita&id_tipologia=32&comefrom=search&id_itinerario=803&gruppo=&area=&cima=&nome=",
    difficulty: "MS",
    region: "Piemonte"
  },
  {
    mountainName: "Monte Pore",
    location: "Dolomiti",
    height: 2405,
    elevationGain: 900,
    link:
      "https://www.planetmountain.com/snow/ski/itinerari/scheda.php?lang=ita&id_tipologia=32&comefrom=search&id_itinerario=4&gruppo=&area=&cima=&nome=",
    difficulty: "MS",
    region: "Veneto"
  },
  {
    mountainName: "Monte Mondeval",
    location: "Dolomiti",
    height: 2455,
    elevationGain: 1000,
    link:
      "https://www.planetmountain.com/snow/ski/itinerari/scheda.php?lang=ita&id_tipologia=32&comefrom=search&id_itinerario=5&gruppo=&area=&cima=&nome=",
    difficulty: "BS",
    region: "Veneto"
  },
  {
    mountainName: "Monte Popera",
    location: "Dolomiti",
    height: 3046,
    elevationGain: 1600,
    link:
      "https://www.planetmountain.com/snow/ski/itinerari/scheda.php?lang=ita&id_tipologia=32&comefrom=search&id_itinerario=1771&gruppo=&area=&cima=&nome=",
    difficulty: "BSA",
    region: "Veneto"
  },
  {
    mountainName: "Monte Sagro",
    location: "Alpi Apuane",
    height: 1748,
    elevationGain: 1050,
    link:
      "https://www.planetmountain.com/snow/ski/itinerari/scheda.php?lang=ita&id_tipologia=32&comefrom=search&id_itinerario=1509&gruppo=&area=&cima=&nome=",
    difficulty: "BSA/OSA",
    region: "Toscana"
  },
  {
    mountainName: "Palla Bianca",
    location: "Alpi Retiche",
    height: 3738,
    elevationGain: 900,
    link:
      "https://www.planetmountain.com/snow/ski/itinerari/scheda.php?lang=ita&id_tipologia=32&comefrom=search&id_itinerario=38&gruppo=&area=&cima=&nome=",
    difficulty: "OSA",
    region: "Trentino Alto Adige"
  },
  {
    mountainName: "Pizzo Scala",
    location: "Alpi Centrali",
    height: 2427,
    elevationGain: 1112,
    link:
      "https://www.planetmountain.com/snow/ski/itinerari/scheda.php?lang=ita&id_tipologia=32&comefrom=search&id_itinerario=2103&gruppo=&area=&cima=&nome=",
    difficulty: "OS",
    region: "Lombardia"
  },
  {
    mountainName: "Pizzo Tresero",
    location: "Alpi Retiche",
    height: 3594,
    elevationGain: 1400,
    link:
      "https://www.planetmountain.com/snow/ski/itinerari/scheda.php?lang=ita&id_tipologia=32&comefrom=search&id_itinerario=49&gruppo=&area=&cima=&nome=",
    difficulty: "OS",
    region: "Lombardia"
  },
  {
    mountainName: "Punta Finale",
    location: "Alpi Retiche",
    height: 3514,
    elevationGain: 600,
    link:
      "https://www.planetmountain.com/snow/ski/itinerari/scheda.php?lang=ita&id_tipologia=32&comefrom=search&id_itinerario=43&gruppo=&area=&cima=&nome=",
    difficulty: "BSA",
    region: "Trentino Alto Adige"
  },
  {
    mountainName: "Punta San Matteo",
    location: "Alpi Retiche",
    height: 3678,
    elevationGain: 1500,
    link:
      "https://www.planetmountain.com/snow/ski/itinerari/scheda.php?lang=ita&id_tipologia=32&comefrom=search&id_itinerario=50&gruppo=&area=&cima=&nome=",
    difficulty: "OSA",
    region: "Lombardia"
  },
  {
    mountainName: "Punta Vermoi",
    location: "Alpi Retiche",
    height: 2934,
    elevationGain: 1300,
    link:
      "https://www.planetmountain.com/snow/ski/itinerari/scheda.php?lang=ita&id_tipologia=32&comefrom=search&id_itinerario=46&gruppo=&area=&cima=&nome=",
    difficulty: "BSA",
    region: "Trentino Alto Adige"
  }
];

// delete all Mountain in Mongo DB and recreate all every time we push with command in terminal =>"Node seed.js"
Mountain.deleteMany();
Mountain.create(mountain)

  .then(mountain => {
    console.log(`${mountain} user created with the following id:`);
    // console.log(usersCreated.map(u => u._id));
  })
  .then(() => {
    // Close properly the connection to Mongoose
    mongoose.disconnect();
  })
  .catch(err => {
    mongoose.disconnect();
    throw err;
  });
