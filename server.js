const express = require('express');

var app = express();
var PORT = 3000;

app.get('/', (req, res)=>{
    res.send('Hello world');
})

app.get('/users', (req, res)=>{
    let users = [
        {name : 'Ken', age:20},
        {name : 'Kelvin', age:18},
        {name : 'Alex', age:30},
    ];
    res.send(users);
})


app.get('/group', (req, res)=>{
    res.status(500).json({errorMessage : 'invalid request'});
})


app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`);
})