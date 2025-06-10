const express = require('express');
const app = express();
const port = 3000;

const mongoDBAccess = require('./mongo-conn.js');

const router = require('./routes/gppd');

app.use(express.json());
app.use('/api', router);

mongoDBAccess();

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});