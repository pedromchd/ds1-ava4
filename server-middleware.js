const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const handlebars = require('express-handlebars');
const handlebars_mod = require('handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
const appRoutes = require('./routes/appRoutes');

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Handlebars configuration
app.engine('hbs', handlebars.engine({
    defaultLayout: false,
    handlebars: allowInsecurePrototypeAccess(handlebars_mod),
    extname: '.hbs' // Set the extension to .hbs
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Routes
app.use(appRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});
