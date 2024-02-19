const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('./models/User'); // Assuming you have a User model
app.use(express.json());


// Connect to MongoDB
mongoose.connect('mongodb://localhost/mydatabase')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));


// Define a schema
app.use(express.json()); // Middleware to parse JSON bodies

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// JWT verification middleware
// User registration endpoint
app.post('/register', async (req, res) => {
    // Hash password and create user
    const hashedPassword = await bcrypt.hash(req.body.password, 8);
    const user = new User({ ...req.body, password: hashedPassword });
    await user.save();
    res.status(201).send({ user });
});

// User login endpoint
app.post('/login', async (req, res) => {
    // Find user and check password
    const user = await User.findOne({ email: req.body.email });
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) return res.status(400).send('Unable to login');

    // Generate JWT
    const token = jwt.sign({ _id: user._id.toString() }, 'secretkey', { expiresIn: '2 hours' });
    res.send({ user, token });
});