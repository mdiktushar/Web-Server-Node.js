
const path = require('path');
const express = require('express');

// Define paths for express contfig
const app = express();
const publicDirectoryPath = path.join(__dirname,'../public');
const viewPath = path.join(__dirname,'../templates');

// Setup hendelbar engine and views locations
app.set('view engine', 'hbs');
app.set('views', viewPath);

// Setup static directary to server
app.use(express.static(publicDirectoryPath));

app.get('', (req, res)=>{
    res.render('index', {
        title: 'Weather app',
        name: 'Tushar'
    });
})

app.get('/about', (req, res)=>{
    res.render('about', {
        title: 'About',
        name: 'Tushar'
    })
})

app.get('/help', (req, res)=>{
    res.render('help', {
        helpText: 'This is some helpful text'
    })
})

app.get('/Weather', (req, res)=>{
    res.send('Weather Page');
})



app.listen(3000, ()=>{
    console.log("Server is up on port 3000.")
});