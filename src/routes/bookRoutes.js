const express = require('express');
const booksRouter = express.Router();

function router(nav) {
    var books = [{
            title: "The Alchemist ",
            author: "Paulo Coelho",
            jenre: "Fantasy",
            about: "The Alchemist follows the journey of an Andalusian shepherd boy named Santiago. Believing a recurring dream to be prophetic, he asks a Gypsy fortune teller in the nearby town about its meaning. The woman interprets the dream as a prophecy telling the boy that he will discover a treasure at the Egyptian pyramids.",
            img: "al.jpg"
        },
        {
            title: "Harry Potter and the Half-Blood Prince",
            author: "J. K. Rowling",
            jenre: "Fantasy",
            img: "harry.jpg"
        },
        {
            title: "The Da Vinci Code",
            author: "	Dan Brown",
            jenre: "Mystery thriller",
            img: "dav.jpg"
        }
    ]
    booksRouter.get('/', function(req, res) {
        res.render('books', {
                nav: [{
                    link: '/books',
                    name: 'Books'
                }],
                title: 'Library App',
                books

            })
            // res.end();
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


        })

    })

    booksRouter.get('/:id', function(req, res) {
        const id = req.params.id;
        res.render('book', {
            nav: [{
                    link: '/books',
                    name: 'Books'
                }


            ],
            title: 'Library App',
            book: books[id]

        })

    })

    return booksRouter;
}

module.exports = router;