
// Stand for Controller
class SiteController {
    // [GET] /news
    home(req, res) {
        // Render from views
        res.render('home')
    }

    search(req,res){
        res.send('Search')
    }
}

module.exports = new SiteController