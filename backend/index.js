const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const connectDB = require('./config/db');
const router = require('./routes');
const msgRoutes = require('./routes/messageadmin');
const conformroute = require('./routes/conformroute');

require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Routes




app.use("/api", router);
app.use('/api/msg', msgRoutes);
app.use('/api/conform', conformroute);



// Server
const PORT = process.env.PORT || 8080;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Connected to DB");
        console.log("Server is running on port " + PORT);
    });
});
