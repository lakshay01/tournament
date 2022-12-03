const express = require('express');
const path = require('path');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;
      const date = new Date();

const teams =[
  { ranking: 1, name:"England", players:[{
    firstName:"John",
    lastName: "Terry",
    gender:"Male",
    dateOfBirth:date
  }, {
    firstName:"Harry",
    lastName: "Kane",
    dateOfBirth:date,
    gender:"Male"
  }]},
  { ranking: 2, name:"Spain" , players:[{
    firstName:"John",
    lastName: "Terry",
    dateOfBirth:date,
    gender:"Male"
  }, {
    firstName:"Harry",
    lastName: "Kane",
    dateOfBirth:date,
    gender:"Male"
  }]},
  { ranking: 3, name:"Portugal", players:[{
    firstName:"John",
    lastName: "Terry",
    dateOfBirth:date,
    gender:"Male"
  }, {
    firstName:"Harry",
    lastName: "Kane",
    gender:"Male"
  }]},
  { ranking: 4, name:"Argentina", players:[{
    firstName:"John",
    lastName: "Terry",
    dateOfBirth:date,
    gender:"Male"
  }, {
    firstName:"Harry",
    lastName: "Kane",
    gender:"Male"
  }]},
  { ranking: 5, name:"Belgium", players:[{
    firstName:"John",
    lastName: "Terry",
    dateOfBirth:date,
    gender:"Male"
  }, {
    firstName:"Harry",
    lastName: "Kane",
    dateOfBirth:date,
    gender:"Male"
  }]},
  { ranking: 6, name:"Netherlands", players:[{
    firstName:"John",
    lastName: "Terry",
    dateOfBirth:date,
    gender:"Male"
  }, {
    firstName:"Harry",
    lastName: "Kane",
    dateOfBirth:date,
    gender:"Male"
  }]},
  { ranking: 7, name:"Norway", players:[{
    firstName:"John",
    lastName: "Terry",
    dateOfBirth:date,
    gender:"Male"
  }, {
    firstName:"Harry",
    lastName: "Kane",
    dateOfBirth:date,
    gender:"Male"
  }]},
  { ranking: 8, name:"Denmark", players:[{
    firstName:"John",
    lastName: "Terry",
    dateOfBirth:date,
    gender:"Male"
  }, {
    firstName:"Harry",
    lastName: "Kane",
    dateOfBirth:date,
    gender:"Male"
  }]},
]




app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));

app.get('/api/teams', (req, res) => {
  console.log('api/teams called!')
  setTimeout(() => res.json(teams), 8000)
});



app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
