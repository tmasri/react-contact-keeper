const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Routes
const UserRoute = require('./routes/users');
const AuthRoute = require('./routes/auth');
const ContactRoute = require('./routes/contacts');


app.get('/', (req, res) => 
   res.json({ msg: 'Welcome to the contact keeper API' })
);

// Define Routes
app.use('/api/users', UserRoute);
app.use('/api/auth', AuthRoute);
app.use('/api/contacts', ContactRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
