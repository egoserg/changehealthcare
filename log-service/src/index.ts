require('dotenv').config();

import express from 'express';

const app = express();
const PORT = process.env.PORT || 5004;
app.use(express.json());

app.post('/', (req, res) => {
    console.log(req.body, `time: ${new Date()}`);
    res.sendStatus(200);
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));