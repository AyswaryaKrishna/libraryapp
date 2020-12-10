const express = require('express');
const adminRouter = express.Router();
const nav = [{



    link: '/admin',
    name: 'Admin Login'
}, {
    link: '/admin/signup',
    name: 'signup'
}];

function router() {

    adminRouter.get('/', function(req, res) {
        res.render('admin', {
                nav,
                title: 'Library App',


            })
            // res.end();
    });

    adminRouter.get('/signup', function(req, res) {
        res.render('signup', {
                nav,
                title: 'Library App',


            })
            // res.end();
    });
    adminRouter.get('/addauthor', function(req, res) {
        res.render('addauthor', {
                nav: [{
                    link: '/admin/addbook',
                    name: 'Add Book'
                }],
                title: 'Library App',


            })
            // res.end();
    });
    adminRouter.get('/addbook', function(req, res) {
        res.render('addbook', {
            nav: [

                {
                    link: '/admin/addbook',
                    name: 'Add Book'

                },
                {
                    link: '/admin/addauthor',
                    name: 'Add Author'

                }
            ],
            title: 'Library App',


        })

    })
    return adminRouter;
}

module.exports = router;