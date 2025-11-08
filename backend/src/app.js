const express = require('express');
const app = express();
const cors = require('cors')

require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/db')();

app.get('/api/health', (req, res) => {
            try {
                        res.status(201).json({ message: 'API working fine.' });
            }
            catch (err) {
                        res.status(500).json({ message: 'Internal Server Error!', err });
            }
})

module.exports = app;