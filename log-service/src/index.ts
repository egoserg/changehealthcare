require('dotenv').config();

const Express = require('express');

const App = Express();
const PORT = process.env.PORT || 5004;

App.use(Express.json());

App.post('/', (req, res) => {
    console.log(req.body, `time: ${new Date()}`);
    res.sendStatus(200);
});

App.listen(PORT, () => console.info(`Running on port ${PORT}`));