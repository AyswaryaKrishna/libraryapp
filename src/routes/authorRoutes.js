const express = require('express');
const authorsRouter = express.Router();

function router(nav) {
    var authors = [{
            title: "USA",
            author: "Sidney Sheldon",
            joner: "Suspense",
            img: "sid.jpg"
        },
        {
            title: "ENGLAND",
            author: "J. K. Rowling",
            joner: "Harry Potter, Fantastic Beasts",
            img: "JK.jpg"
        },
        {
            title: "BRAZIL",
            author: "paulo coelho",
            joner: " lyricist and novelist",
            img: "PAU.jpg"
        }
    ]
    authorsRouter.get('/', function(req, res) {
        res.render('authors', {
                nav: [{
                        link: '/authors',
                        name: 'Authors'
                    }

                ],
                title: 'Library App',
                authors

            })
            // res.end();
    });

    authorsRouter.get('/:id', function(req, res) {
        const id = req.params.id;
        res.render('author', {
            nav: [{
                    link: '/authors',
                    name: 'Authors'
                }

            ],

            title: 'Library App',
            author: authors[id]

        })

    })
    return authorsRouter;
}

module.exports = router;