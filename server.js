const express = require('express');
const cors = require('cors');
const app = express();
const port = 1000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extented: true}));

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(port, () => console.log(`App listening on port http://localhost:${port}!`));