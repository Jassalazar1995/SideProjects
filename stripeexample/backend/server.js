const express = require("express");
const app = express();
const { resolve } = require("path")
const env = require("dotenv").config({ path: "./.env"})
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2022-08-01",
});
app.use(express.static(process.env.STATIC_DIR))

const PORT = 5000;

app.use(express.json())

// Test
app.get('/test', (req,res)=> {
    res.json('Hello World!')
})

app.get("/", (req,res) => {
    const path = resolve(process.env.STATIC_DIR + "/index.html")
    res.sendFile(path)
})

app.get("/config", (req,res) => {
    res.send({
        publishableKey: process.env.STRIPE_PUBLISHABLE_KEY
    });
});

app.post("/create-payment-intent", async(req, res) =>{})

app.listen(PORT, () => {
    console.log(`Listening at localhost:${PORT}`)
})