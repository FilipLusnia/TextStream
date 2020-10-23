const express = require('express');
const cors = require("cors");
const authMiddleware = require("../firebase/auth-middleware");

const firebase = require("firebase-admin");
const serviceAccount = require("./textstream-a6459-firebase-adminsdk-b0ib0-0d5227162b.json");

const app = express();
app.use(cors());

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "https://textstream-a6459.firebaseio.com"
});

app.use("/", authMiddleware);

const books = require('./books/Books');
app.get("/books", (req, resp) => {
    return resp.send({books});
});

const port = 4000;
app.listen(port, () => console.log(`Running at ${port}`));