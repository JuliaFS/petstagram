const router = require('express').Router();

router.get('/', (req, res) => {
    // console.log(req.user) proverqvame dali e sazdaden user
    res.render('home');
});

router.get('/404', ( req, res ) => {
    res.render('404');
});


module.exports = router;