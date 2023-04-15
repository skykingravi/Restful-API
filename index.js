import express from "express";
const app = express();
const PORT = 8080;

// REST endpoint
app.get('/', (req, res) => {
    
    // for 'OK' response
    res.status(200).send({
        color: `#${Math.floor(Math.random() * 0x1000000).toString(16)}`
    });

});

app.listen(PORT);