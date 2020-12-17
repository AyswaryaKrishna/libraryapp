const express = require('express');
const adminRouter = express.Router();
const bookdata = require('../model/bookdata')
const authordata = require('../model/authordata')
    // const signupdata = require('../model/signupdata')


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
    adminRouter.post('/addauthor/added', function(req, res) {
        var item = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            img: req.body.img

        }
        var author = authordata(item);
        author.save();
        res.redirect('/authors');
    })

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
    adminRouter.post('/addbook/added', function(req, res) {
        var item = {
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            img: req.body.img

        }
        var book = bookdata(item);
        book.save();
        res.redirect('/books');
    })

    // delete operation
    adminRouter.get('/delete/:id', function(req, res) {
        bookdata.findByIdAndRemove(req.params.id, function(err, project) {
            // if (err) {

            //     req.flash('error_msg', 'Record Not Deleted');
            //     res.redirect('../books');
            // } else {

            //     req.flash('success_msg', 'Record Deleted');
            //     res.redirect('../books');
            // }
            console.log("deleted")
            res.redirect('/books')
        });
    });
    adminRouter.get('/delete1/:id', function(req, res) {
        authordata.findByIdAndRemove(req.params.id, function(err, project) {
            // if (err) {

            //     req.flash('error_msg', 'Record Not Deleted');
            //     res.redirect('../books');
            // } else {

            //     req.flash('success_msg', 'Record Deleted');
            //     res.redirect('../books');
            // }
            console.log("deleted")
            res.redirect('/authors')
        });
    });
    /* GET SINGLE User BY ID */
    adminRouter.get('/edit/:id', function(req, res, next) {
        console.log(req.params.id);
        bookdata.findById(req.params.id, function(err, bookdata) {
            // if (err) {
            //     console.log(err);
            // } else {
            //     console.log(user);

            //     res.render('update', { users: user });
            // }
            res.render('update', {
                bookdata: bookdata,
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
            });
        });
    });
    /* UPDATE User */
    adminRouter.get('/edit/:id', function(req, res, next) {

        bookdata.findByIdAndUpdate({ _id: req.body._id }, req.body, { new: true }, function(bookdata) {
            // const id = req.params.id;
            // var item = {
            //     title: req.body.title,
            //     author: req.body.author,
            //     genre: req.body.genre,
            //     img: req.body.img
            // }
            // var book = bookdata._id(item);
            // book.save();

            res.redirect('/books');


        });
    });
    // adminRouter.post('/edit/added', function(req, res) {
    //     const id = req.params.id;
    //     bookdata.findByIdAndUpdate({ _id: req.body._id }, req.body, { new: true }, function(bookdata) {
    //         var item = {
    //             title: req.body.title,
    //             author: req.body.author,
    //             genre: req.body.genre,
    //             img: req.body.img

    //         }
    //         var book = bookdata(item);
    //         book.save();
    //         res.redirect('/books');
    //     })

    // }) /* GET SINGLE User BY ID */
    adminRouter.get('/edit1/:id', function(req, res, next) {
        console.log(req.params.id);
        authordata.findById(req.params.id, function(err, authordata) {
            // if (err) {

            //     console.log(err);
            // } else {
            //     console.log(user);

            //     res.render('update', { users: user });
            // }
            res.render('update1', {
                authordata: authordata,
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
            });

        });
    });
    /* UPDATE User */

    adminRouter.get('/edit1/:id', function(req, res, next) {

        authordata.findByIdAndUpdate({ _id: req.body._id }, req.body, { new: true }, function(authordata) {
            // const id = req.params.id;
            // var item = {
            //     title: req.body.title,
            //     author: req.body.author,
            //     genre: req.body.genre,
            //     img: req.body.img
            // }
            // var book = bookdata._id(item);
            // book.save();

            res.redirect('/authors');


        });
    });

    return adminRouter;
}

module.exports = router;