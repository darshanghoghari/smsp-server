require('dotenv').config();
//---------importing the required modules---------------
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const errorMiddleware = require('./middlewares/error.middleware');
const { ValidationError } = require('express-validation');
//---------import file route----------------------
const databaseConnection = require('./databases/database');
const authRoute = require('./routes/auth.routes');
const houseRoute = require('./routes/house.routes');
const complainRoute = require('./routes/complain.routes');
const clubBooking = require('./routes/clubBooking.routes');
const circularNoticeRoute = require('./routes/circularNotice.routes');
//------------------------------------------
const app = express();
const port = process.env.PORT || 3000;


//---------initial-middlewares----------------
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.static(path.resolve("./public")));
app.use(cookieParser())


//--------route handler----------------------

app.use('/auth', authRoute, errorMiddleware);
app.use("/house", houseRoute, errorMiddleware);
app.use("/complain", complainRoute, errorMiddleware);
app.use("/clubBooking", clubBooking, errorMiddleware);
app.use("/circularNotice", circularNoticeRoute, errorMiddleware);
//-----------Connecting Database and start server---------
databaseConnection.then(() => {
    app.listen(port, () => {
        console.log(`Server Running On http://localhost:${port}`);
    })
});