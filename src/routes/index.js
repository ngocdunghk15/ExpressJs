const newsRouter = require('./news')
const siteRoute = require('./site')

function route(app) {
    

    // app.get('/news', (req, res) => {
    //     console.log(req.query.q)
    //     res.render('news')
    // })

    app.use('/news',newsRouter)
    app.use('/',siteRoute)
   
}

module.exports = route;