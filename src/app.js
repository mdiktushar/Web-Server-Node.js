
const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


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

app.get('/weather', (req, res)=>{

    if(req.query.address){
        // res.send({
        //     forecast: 'It is snowing',
        //     location: 'Philadelphia',
        //     address: req.query.address
        // });

        geocode(req.query.address, (error, data = {})=>{

            if(error){
                return res.send({error});
            }
            // console.log("Location:");
            // console.log('data', data);
            
            forecast(req.query.address, (error, Data)=>{
                if(error){
                    return res.send({error});
                }
                res.send({
                    location: data,
                    weather: Data
                })
            })
        })
    }else{
        res.send({
            error: 'You must provide a address term'
        })
    }    
})


app.get('/products', (req, res) =>{

    if(req.query.search)
    {
        console.log(req.query.search)
        res.send({
            products: []
        })
    }
    else{
        res.send({
            error: 'You must provide a search term'
        })
    }

    
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


// node src/app.js -e js,hbs