const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

app.get('/', (req, res) =>{
    res.send("Hello from backend!");
});

app.listen(port , ()=>{
    console.log(`Backend Server Running at http://localhost:${port}`);
});