const express = require('express');
const cors = require('cors');
// require the controllers
const ctrl = require('./controller');

// Setup App
const app = express();

// Top Level Middleware
app.use(express.json());
app.use(cors());

// End Points
app.get('/api/users', ctrl.sendUsers);
app.post('/api/users/add', ctrl.addUser);
app.put('/api/users/update/:id', ctrl.updateUser);
app.delete('/api/user');

// Server Listening
app.listen(3005, () => {
    console.log('Server running!')
});