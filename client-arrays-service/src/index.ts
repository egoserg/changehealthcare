import express from 'express'

const app = express();
const port = 5005;

app.get('/', (req, res) => {
    res.send('It is "client-arrays-service"');
});

app.listen(port, () => console.log(`Running on port ${port}`));