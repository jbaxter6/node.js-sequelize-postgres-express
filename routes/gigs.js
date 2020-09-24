const express = require('express');
const gigsRouter = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gig');


// Get Gig List
gigsRouter.get('/', (req, res, next) => {
    Gig.findAll()
    .then(gigs => {
        res.render('gigs', {gigs});
        return console.log(gigs);
    })
    .catch(err => console.log(err))
})

gigsRouter.get('/add', (req, res, next) => {
    res.render('add')
})

gigsRouter.post('/add', (req, res, next) => {
    const data = {
        title: "Looking for a React developer",
        technologies: "React, js, html, css",
        budget: "$3000",
        description: "SafeNet Consulting is searching for a Full Stack Developer with strong React.js experience to join our growing team. We are looking for high performing individuals interested in leveraging the latest technologies, with experience in all facets of the software development process, including the research, design, programming, and testing of computer software.",
        contact_email: "user1@gmail.com"
    }

    let { title, technologies, budget, description, contact_email } = data

    Gig.create({
        title,
        technologies,
        description, 
        budget, 
        contact_email
    })
    .then(gig => res.redirect('/gigs'))
    .catch(err => console.log(err))
})


module.exports = gigsRouter;