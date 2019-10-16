'use strict';
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('index', { title: 'Home' });
});

router.get('/:page', function (req, res) {
    if (req.params.page == 'index') {
        res.render('index', { title: 'Home' });
    }  
    else if (req.params.page == 'about') {
        res.render('about', { title: 'About Me' });
    }      
    else if (req.params.page == 'projects') {
        res.render('projects', { title: 'Projects' });
    }    
    else if (req.params.page == 'services') {
        res.render('services', { title: 'Services' });
    }  
    else if (req.params.page == 'contact') {
        res.render('contact', { title: 'Contact Me' });
    }
});

module.exports = router;
