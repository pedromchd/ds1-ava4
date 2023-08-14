const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const flash = require('connect-flash');
const session = require('express-session');
const handlebars = require('express-handlebars');
const handlebars_mod = require('handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
const appRoutes = require('./routes/appRoutes');

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Flash data settings
app.use(session({
    secret: 'a_any_key_for_this_project',
    resave: false,
    saveUninitialized: false
}));
app.use(flash());

// Handlebars configuration
app.engine('hbs', handlebars.engine({
    defaultLayout: false,
    handlebars: allowInsecurePrototypeAccess(handlebars_mod),
    extname: '.hbs' // Set the extension to .hbs
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Custom middleware to handle flash messages
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.errors = req.session.errors;
    next();
});

// Custom middleware to run before users route
app.use('/users', (req, res, next) => {
    console.log('Middleware: Will run before users route');
    next();
});

// Routes
app.use(appRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});
