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

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Handlebars configuration
const helpers = require('./helpers/helpers'); // Import the helpers
const { sequelize } = require('./config/database');
app.engine('hbs', handlebars.engine({
    defaultLayout: false,
    handlebars: allowInsecurePrototypeAccess(handlebars_mod),
    extname: '.hbs', // Set the extension to .hbs
    helpers: helpers // Register the imported helpers
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Sync the models with the database
sequelize.sync()
    .then(() => {
        console.log('Database synced sucessfully');
    })
    .catch((error) => {
        console.error('Error syncing database:', error);
    });

// Routes
app.use(appRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});
