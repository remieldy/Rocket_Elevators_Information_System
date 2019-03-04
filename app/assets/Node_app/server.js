const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
app.use(cors());



app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});




// RESIDENTIAL CALCULS ---------------------------------------------------------
app.post('/calculs', function (req, res) {
  console.log("post");
  var nb_app = parseInt(req.body.nb_app);
  var nb_floor = parseInt(req.body.nb_floor);
  var nb_maxPeople_2 = parseInt(req.body.nb_maxPeople_2);
  var nb_floor_2 = parseInt(req.body.nb_floor_2);
  var nb_basement_2 = parseInt(req.body.nb_basement_2);
  var nb_maxPeople_4 = parseInt(req.body.nb_maxPeople_4);
  var nb_floor_4 = parseInt(req.body.nb_floor_4);
  var nb_basement_4 = parseInt(req.body.nb_basement_4);



  var calculs_res = function () {
    console.log("function residential working");
    var app_ratio = (nb_app / nb_floor);
    console.log(app_ratio + "Appartments per floor");

    var nb_elevator = Math.ceil(app_ratio / 6);
    console.log(nb_elevator + "Numbers of elevator needed");

    var nb_column = Math.ceil(nb_floor / 20);
    console.log(nb_column + "numbers of column needed");

    var nb = Math.ceil(nb_elevator * nb_column);
    console.log(nb + "numbers of elevator modified");


    return nb;

  }



  // RESIDENTIAL CALCULS END ------------------------------------------------------

  // CORPORATE CALCULS ------------------------------------------------------------


  var calculs_corpo = function () {
    console.log("function corpo working");
    console.log(nb_maxPeople_2);
    var tot_people2 = ((nb_maxPeople_2) * (nb_floor_2 + nb_basement_2));
    console.log(tot_people2 + "Numbers of people 2");

    var nb_elevator2 = Math.ceil(tot_people2 / 1000);
    console.log(nb_elevator2 + " Nb of elevators 2")

    var nb_column2 = Math.ceil((nb_floor_2 + nb_basement_2) / 20);
    console.log(nb_column2 + "numbers of column 2")

    var nb_elevator_almost_tot2 = Math.ceil(nb_elevator2 / nb_column2);
    console.log(nb_column2 + "Numbers of column 2");

    var nb2 = (nb_elevator_almost_tot2 * nb_column2);
    console.log(nb2 + "Numbers of elevator modified 2");


    return nb2;
  }

  // CORPORATE CALCULS END ----------------------------------------------------------

  // HYBRID CALCULS ------------------------------------------------------------


  var calculs_hybrid = function () {
    console.log("function hybrid working");
    console.log(nb_maxPeople_4);
    var tot_people4 = Math.ceil(nb_maxPeople_4 * (nb_floor_4 + nb_basement_4));
    console.log(tot_people4 + "Numbers of people 4");

    var nb_elevator4 = Math.ceil(tot_people4 / 1000);
    console.log(nb_elevator4 + " Nb of elevators 4")

    var nb_column4 = Math.ceil((nb_floor_4 + nb_basement_4) / 20);
    console.log(nb_column4 + "numbers of column 4")

    var nb_elevator_almost_tot4 = Math.ceil(nb_elevator4 / nb_column4);
    console.log(nb_column4 + "Numbers of column 4");

    var nb4 = (nb_elevator_almost_tot4 * nb_column4);
    console.log(nb_column4 + "Numbers of elevator modified 4");


    return nb4;



  }
  // HYBRID CALCULS END ----------------------------------------------------------


  var1 = (calculs_res().toString());
  var2 = (calculs_corpo().toString());
  var3 = (calculs_hybrid().toString());

  res.send([var1, var2, var3])







});

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}`));