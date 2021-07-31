require('dotenv').config();

const Express = require('express');
const Axios = require('axios');
const Cors = require('cors');
const { generateRange } = require('./models/range');

const App = Express();
const PORT = process.env.PORT || 5005;
const LOG_SERVICE = process.env.LOG_SERVICE;

App.use(Cors());
App.use(Express.json());

App.post('/', (req, res) => {
    const {rangeSize} = req.body;

    try {
        const range = generateRange(rangeSize);

        Axios.post(LOG_SERVICE, range)
            .then(() => res.json(range))
            .catch(error => {
                console.error('Logger service is broken > ', error.message);
                res.json(range);
            });
    } catch (error) {
        Axios.post(LOG_SERVICE, {error: error.message})
            .then(() => res.status(500).json({error: error.message}))
            .catch(logError => {
                console.error('Logger service is broken > ', logError.message);
                res.status(500).json({error: error.message})
            });
    }
});

App.listen(PORT, () => console.info(`Running on port ${PORT}`));