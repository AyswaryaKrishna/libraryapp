const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const port = process.env.PORT || 9999;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const nav = [{
        link: '/books',
        name: 'Books'
    },
    {
        link: '/authors',
        name: 'Authors'
    },
    {
        link: '/login',
        name: 'Login'
    }
];
const booksRouter = require('./src/routes/bookRoutes')(nav)
const authorsRouter = require('./src/routes/authorRoutes')(nav)
const loginRouter = require('./src/routes/loginRoutes')(nav)
const adminRouter = require('./src/routes/adminRoutes')(nav)

app.use(express.urlencoded({ extended: true }))

app.use(express.static('./public'))
app.set('view engine', 'ejs')
app.set('views', './src/views')
app.use('/books', booksRouter)
app.use('/authors', authorsRouter)
app.use('/login', loginRouter)
app.use('/admin', adminRouter)

// app.get('/login', function(req, res) {
//     res.render('login', {

//         nav,
//         title: 'Library App'

//     })
// })

app.get('/', function(req, res) {
    res.render('index', {

        nav,
        title: 'Library App'

    })
})

app.listen(port, () => { console.log("server port ready at" + port) });