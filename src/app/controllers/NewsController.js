
// Stand for Controller
class NewController {
    // [GET] /news
    index(req, res) {
        // Render from views
        res.render('news')
    }

    show(req,res){
        res.send('NEWS ABOUT World WAR')
    }
}

module.exports = new NewController