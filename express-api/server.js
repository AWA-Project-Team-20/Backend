const express = require('express')
const app = express()
var port = process.env.PORT || 3000;
const data = require('./data.json')
const cors = require('cors')

const { Pool, Client } = require('pg')
const pool = new Pool({
    user: 'valer',
    password: 'LMori1011S',
    server: 'localhost',
    database: 'DS',
    port: 5432
})

const client = new Client({
    user: 'valer',
    password: 'LMori1011S',
    server: 'localhost',
    database: 'DS',
    port: 5432
})
client.connect();

app.use(express.json());
app.use(cors());

async function testAsync() {
var res = await client.query("SELECT * FROM customer");
res.rows.forEach(row=>{
    console.log(row);
});
await client.end();
}

testAsync();

app.listen(port, function () {
    console.log(`App listening at http://localhost:${port}`)
});

/*

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

// POST a user
app.post('/users', (req, res) => {
    const body = req.body
    
    if (!body.name || !body.password) {
        console.log("Missong data!");
        return res.status(400).json({
            error: 'Missing data.'
        });
    }
    const maxID = users.length > 0
    ? Math.max(...users.map(u => u.id))
    : 0

    const user = req.body;
    user.id = maxID + 1;
    users = users.concat(user);
    res.json(user);
    console.log("User added", user);
})

*/