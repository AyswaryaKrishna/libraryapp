const express = require('express');
const authorsRouter = express.Router();

const authordata = require('../model/authordata');

function router(nav) {
    // var authors = [{
    //         title: "USA",
    //         author: "Sidney Sheldon",
    //         genre: "Suspense",
    //         img: "sid.jpg"
    //     },
    //     {
    //         title: "ENGLAND",
    //         author: "J. K. Rowling",
    //         genre: "Harry Potter, Fantastic Beasts",
    //         img: "JK.jpg"
    //     },
    //     {
    //         title: "BRAZIL",
    //         author: "paulo coelho",
    //         genre: " lyricist and novelist",
    //         img: "PAU.jpg"
    //     }
    // ]
    authorsRouter.get('/', function(req, res) {
        // booksRouter.get('/', function(req, res) {
        authordata.find()
            .then(function(authors) {
                res.render('authors', {
                    nav: [{
                            link: '/authors',
                            name: 'Authors'
                        }

                    ],
                    title: 'Library App',
                    authors

                });
                // res

            });

        // res.end();
    });

    authorsRouter.get('/:id', function(req, res) {
        const id = req.params.id;
        authordata.findOne({ _id: id })
            .then(function(author) {
                res.render('author', {
                    nav: [{
                            link: '/authors',
                            name: 'Authors'
                        }

                    ],

                    title: 'Library App',
                    author

                })

            })


    })
    return authorsRouter;
}

module.exports = router;