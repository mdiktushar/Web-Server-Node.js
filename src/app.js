
const path = require('path');
const express = require('express');
const hbs = require('hbs');

// Define paths for express contfig
const app = express();
const publicDirectoryPath = path.join(__dirname,'../public');
const viewPath = path.join(__dirname,'../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');

// Setup hendelbar engine and views locations
app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialsPath);

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
        title: 'Help',
        name: 'Tushar',
        helpText: 'This is some helpful text'
    })
}) 

app.get('/Weather', (req, res)=>{
    res.send('Weather Page');
})

app.get('/help/*',(req, res)=>{
    res.render('404', {
        title: '404',
        errorMessage: 'Help Article Not Found..!',
        name: 'Tushar',
    })
})

app.get('/about/*',(req, res)=>{
    res.render('404', {
        title: '404',
        errorMessage: 'About Article Not Found..!',
        name: 'Tushar',
    })
})

app.get('*',(req, res)=>{
    res.render('404', {
        title: '404',
        errorMessage: 'Page Not Found...!',
        name: 'Tushar',
    })
}) 

app.listen(3000, ()=>{
    console.log("Server is up on port 3000.")
});