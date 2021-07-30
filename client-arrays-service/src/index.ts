require('dotenv').config();

import express from 'express';
const Axios = require('axios');
const cors = require('cors');
const app = express();
const Range = require('./models/range');

const PORT = process.env.PORT || 5005;
const LOG_SERVICE = process.env.LOG_SERVICE;

app.use(cors());
app.use(express.json());

app.post('/', (req, res) => {
    const {rangeSize} = req.body;

    try {
        const result = Range.generate(rangeSize);

        Axios.post(LOG_SERVICE, result)
            .then(() => res.json(result))
            .catch(error => console.error(error));
    } catch (error) {
        Axios.post(LOG_SERVICE, {error: error.message})
            .then(() => res.status(500).json({error: error.message}))
            .catch(error => console.error(error));
    }
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));