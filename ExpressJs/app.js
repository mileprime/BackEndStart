const express = require('express');
const app = express();
const port = 8000;

app.use(express.json()); //Middleware to parse

app.get('/resource', (req,res) => {
    res.send('GET request received');
});

app.post('/resource', (req, res) => {
    const data = req.body;
    res.json({message: 'POST request received', data});
});

app.put('/resource', (req,res) => {
    const data = req.body;
    res.json({ message: 'PUT request received', data});
});

app.delete('/resource', (req,res) => {
    res.send('DELETE request received');
});

app.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}/`);
});