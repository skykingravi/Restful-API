import express from "express";
const app = express();
const PORT = process.env.PORT || 8080;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// REST endpoint
app.get('/', (req, res) => {
    
    // for 'OK' response
    res.status(200).send({
        color: `#${Math.floor(Math.random() * 0x1000000).toString(16)}`
    });

});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
