const express = require('express');

const app = express();
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const movieRoute = require("./routes/movies")
const listRoute = require("./routes/lists")

const mongoose = require("mongoose")
const dotenv = require('dotenv')

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    // useCreateIndex: true
})
.then(() => {
    console.log('Connected to MongoDB!!!');
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
});

app.use(express.json());

app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/movies",movieRoute);
app.use("/api/lists",listRoute);


app.listen(5000, () => {
    console.log("Backend server is running")
})