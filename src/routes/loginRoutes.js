const express = require('express');
const loginRouter = express.Router();
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

    loginRouter.get('/signup', function(req, res) {
        res.render('signup', {
                nav,
                title: 'Library App',


            })
            // res.end();
    });
    return loginRouter;
}

module.exports = router;