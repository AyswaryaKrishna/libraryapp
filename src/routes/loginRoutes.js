const express = require('express');
const loginRouter = express.Router();
const signupdata = require('../model/signup')


const nav = [{
        link: '/login/signup',
        name: 'Signup'
    },

    {
        link: '/login',
        name: 'Login'
    }
];

function router() {

    loginRouter.get('/', function(req, res) {
        res.render('login', {
                nav,
                title: 'Library App',


            })
            // res.end();
    });
    loginRouter.post('/login/check', function(re, res) {
        email = req.body.email;
        password = req.body.password;
        if (signupdata.find(email) == email) {
            if (signupdata.find(password) == password) {
                res.redirect('/books')
            }
        } else {
            res.redirect('/login')
        }

    })

    loginRouter.get('/signup', function(req, res) {
        res.render('signup', {
                nav,
                title: 'Library App',


            })
            // res.end();
    });
    loginRouter.post('/signup/done', function(req, res) {
        var item = {
            email: req.body.email,
            password: req.body.password,
            address1: req.body.address1,
            address2: req.body.address2,
            phone: req.body.phone,
            zip: req.body.zip

        }
        var signup = signupdata(item);
        signup.save();
        res.redirect('/login');
    })

    return loginRouter;
}

module.exports = router;