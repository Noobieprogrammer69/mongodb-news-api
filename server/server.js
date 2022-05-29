require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const cookieparser = require('cookie-parser');
const authRouter = require('./routers/authRouter');
const userRouter = require('./routers/userRouter');

const app = express();

app.use(express.json())
app.use(cors());
app.use(cookieparser());

app.use('/api', authRouter);
app.use('/api', userRouter);

app.get('/', (req, res) => {
    res.send('App is running')
})

const port = process.env.PORT || 5000;
const URL = process.env.MONGO_URI;

mongoose.connect("mongodb+srv://login:loginproject@cluster0.qkj5e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err) => {
    if(err) throw err;
    console.log('MongoDb is connected')
})

// app.get("/", (req, res) => {
//     res.status(500).send("Hello World");
// });


app.listen(port, () => {
    console.log(`app is running on ${port}`);
});