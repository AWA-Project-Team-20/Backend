const express = require('express')
const app = express()
var port = process.env.PORT || 4000;
const data = require('./data.json')
const cors = require('cors')

app.use(express.json());
app.use(cors());

let restaurants = data.restaurants;
let users = data.users;

//GET all restaurants
app.get('/restaurants', (req, res) => {
    res.json(restaurants);
})

// GET all users
app.get('/users', (req, res) => {
    res.json(users);
})

// GET a single user
app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(u => u.id === id);
    
    if(user) {
        console.log(user);
        res.json(user);
    }
    else {
        console.log("No user found!");
        res.status(404).end();
    }
})

// GET a single restaurant
app.get('/restaurants/:id', (req, res) => {
    const id = Number(req.params.id);
    const restaurant = restaurants.find(u => u.id === id);
    
    if(restaurant) {
        console.log(restaurant);
        res.json(restaurant);
    }
    else {
        console.log("No restaurant found!");
        res.status(404).end();
    }
})

app.listen(port, function () {
    console.log(`App listening at http://localhost:${port}`)
});