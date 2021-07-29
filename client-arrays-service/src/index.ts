require('dotenv').config();

import express from 'express';
const Axios = require('axios');
const app = express();
const Range = require('./models/range');

const PORT = process.env.PORT || 5005;
const LOG_SERVICE = process.env.LOG_SERVICE;

app.use(express.json());

app.get('/', (req, res) => res.send('It is "client-arrays-service"'));

// const N = -100;
//
// try { // statements to try
//     const result = Range.generate(N);
//     Axios.post(LOG_SERVICE, result).then(() => {
//         console.log('result > ', result);
//     });
// } catch (error) {
//     Axios.post(LOG_SERVICE, {error: error.message}).then(() => {
//         console.log('error > ', error.message);
//     });
// }

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