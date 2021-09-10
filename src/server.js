const express = require('express');
const app = require('./app');
require('./infra/database');

const port = process.env.PORT || 3001;
app.use(express.json());

app.listen(port, () => {    
    console.log(`Running on ${port}...`);
})