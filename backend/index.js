const express = require('express');
const app = express();
var cors = require('cors')   
const PORT = 8000;

 const mongoDB = require('./db');
  mongoDB();

  app.use(cors());
  
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());
app.use('/api',require("./Routes/CreateUser"));
app.use('/api',require("./Routes/DisplayData"));


app.get('/',(req,res) => {
    res.send('helll')
})

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
})