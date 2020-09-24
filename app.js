const express = require('express');
const expbars = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

// Database
const db = require('./config/database') 

// Test DB
db.authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log('Error: ' + err))

const app = express();

// handlebars middleware gives views
app.engine('handlebars', expbars({ defaultLayout: 'main'}))
app.set('view engine',)

app.get('/', (req, res, next) => res.send('INDEX'))

// Gig Routes

app.use('/gigs', require('./routes/gigs'))

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server started on port ${PORT}`))