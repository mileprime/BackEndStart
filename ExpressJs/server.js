const express = require('express');
const app = express();
const port = 8001;
app.use(express.json());

let users = [];

app.post('/users', (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).json(user);
    console.log(users);
})

app.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}/`);
});