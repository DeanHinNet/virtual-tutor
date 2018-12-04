const express = require('express')
const bodyParser = require('body-parser');
const port = 8890;
const app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist/'));

app.listen(port, ()=>{
    console.log(`Online Tutors running ${port}`);
})



