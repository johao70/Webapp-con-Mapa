const express = require('express');

const app = express();

const PORT =  3000;

app.get('/estudiantes', (req, res) => {
    res.send('YO PUEDO TODO');
});

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});