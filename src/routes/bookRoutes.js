const express = require('express');
const bookdata = require('../model/bookdata');
const booksRouter = express.Router();

function router(nav) {

    booksRouter.get('/', function(req, res) {
        bookdata.find()
            .then(function(books) {
                res.render('books', {
                    nav,
                    title: 'Library App',
                    books

                });
                // res

            });
        // .end();
    });
    booksRouter.get('/addbook', function(req, res) {

        res.render('addbook', {
            nav: [{
                    link: '/books',
                    name: 'Books'
                },

                {
                    link: '/books/addbook',
                    name: 'Add Book'

                }
            ],
            title: 'Library App',


        });

    });

    booksRouter.get('/:id', function(req, res) {
        const id = req.params.id;
        bookdata.findOne({ _id: id })
            .then(function(book) {
                res.render('book', {
                    nav: [{
                            link: '/books',
                            name: 'Books'
                        }


                    ],
                    title: 'Library App',
                    book

                });
            });


    });

    return booksRouter;
}

module.exports = router;