
const path = require('path');
const express = require('express');

// console.log(path.join(__dirname,'../public'));

const app = express();

app.use(express.static(path.join(__dirname,'../public')));

app.get('/Weather', (req, res)=>{
    res.send('Weather Page');
})



app.listen(3000, ()=>{
    console.log("Server is up on port 3000.")
});