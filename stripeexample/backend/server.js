const express = require("express");
const app = express();

const PORT = 5000;

app.use(express.json())

// Test
app.get('/', (req,res)=> {
    res.json('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Listening at localhost:${PORT}`)
})