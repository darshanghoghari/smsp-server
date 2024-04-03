require('dotenv').config();
//---------importing the required modules---------------
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');

//---------import file route----------------------
const errorMiddleware = require('./middlewares/error.middleware')
const { logger, stream } = require('./utils/logger.util');
const databaseConnection = require('./databases/database');

const authRoute = require('./routes/auth.routes');
const houseRoute = require('./routes/house.routes');
const complainRoute = require('./routes/complain.routes');
const clubBooking = require('./routes/clubBooking.routes');
const circularNoticeRoute = require('./routes/circularNotice.routes');
const meetingRoute = require('./routes/meeting.routes');
//------------------------------------------
const app = express();
const port = process.env.PORT || 3000;


//---------initial-middlewares----------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");
app.set("views", path.resolve("./src/views"));
app.use(cookieParser());
const corsOptions = {
    origin: process.env.CORS_ORIGIN,
    credentials: true
};
app.use(cors(corsOptions));
app.use(morgan(process.env.LOG_FORMAT || "dev", { stream }));


//--------route handler----------------------

app.use('/auth', authRoute, errorMiddleware);
app.use("/house", houseRoute, errorMiddleware);
app.use("/complain", complainRoute, errorMiddleware);
app.use("/clubBooking", clubBooking, errorMiddleware);
app.use("/circularNotice", circularNoticeRoute, errorMiddleware);
app.use("/meeting", meetingRoute, errorMiddleware);


//-----------Connecting Database and start server---------
app.listen(port, () => {
    logger.info(`=================================`);
    logger.info(`🚀 App listening on the port ${port} Link : http://localhost:${port}`);
    databaseConnection();
    logger.info(`=================================`);
    logger.info(`Database on Running`);
    logger.info(`=================================`);
})



// databaseConnection.then(() => {
//     app.listen(port, () => {
//         console.log(`Server Running On `);
//     })
// });