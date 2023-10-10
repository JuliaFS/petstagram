const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const { auth } = require('./middlewears/authMiddlewear');
const { errorHandler } = require('./middlewears/errorHandlerMiddleware');
const routes = require('./routes');

const app = express();
const PORT = 5300;

mongoose.connect('mongodb://127.0.0.1:27017/petstagram')
.then(() => console.log('DB connected succesfully'))
.catch(err => console.log('Db error: ', err.message));

//handlebars configurations
app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', 'src/views');


app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(auth);
app.use(routes);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}...`));