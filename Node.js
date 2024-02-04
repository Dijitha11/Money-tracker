const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Connect to MongoDB
mongoose.connect('mongodb://localhost/moneyTracker', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
const transactionRoutes = require('./routes/index');
app.use('/transactions', transactionRoutes);

// Start the server
app.listen(PORT, () => {console.log(Server is running on http://localhost:${PORT});
});
