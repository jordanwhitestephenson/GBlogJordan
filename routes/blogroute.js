const router = require('express').Router();
const knex = require('../db/knex');
var count = 0;
const moment = require('moment')

function Blogentry() {
    return knex('blog');
}


// <--JOIN--->
router.get('/', function(req, res) {

    knex('blog')
        .leftJoin('username', 'username.id','username_id')
        .select('blog.id', 'blog.body', 'blog.name', 'blog.title', 'blog.username_id', 'username.email', 'created_at')
        .then(function(result) {
            res.json(result)
        })

})
//CREATE BLOG POST//
router.post('/', function(req, res) {
  //if email is already used/
    var userID;
    console.log(res)
    knex('username').where('email', req.body.email).select('id').then(result => {
        userID = result[0].id
        return Blogentry().insert({
          name: req.body.name,
          username_id: userID,
          title: req.body.title,
          body: req.body.body,
        }, ['username_id', 'body', 'title', 'name'])
        .then(function(result) {
          res.json(result)
          res.json(myDate)
        })
    })
        .catch(result => {
            console.log(`User not found, new userID is ${userID}`);
            //createnew Author
            knex('username').insert({
                    email: req.body.email,
                    name: req.body.name
                }, 'id')
                //create blog
                .then(result => {
                    return Blogentry().insert({
                            username_id: result[0],
                            title: req.body.title,
                            body: req.body.body,
                            name: req.body.name
                        }, ['username_id', 'title', 'body', 'name'])
                        .then(result => {
                            res.json(result)
                        });
                })
        })
});



router.get('/', function(req, res) {
    Blogentry().select().then(function(result) {
        res.json(result);
    });
});

router.get('/:id', function(req, res) {
    Blogentry().where('id', req.params.id).first().then(function(result) {
        res.json(result);
    });
});


router.put('/:id', function(req, res) {
    Blogentry().where('id', req.params.id).update({
        body: req.body.body,
        name: req.body.name,
        title: req.body.title
    }).then(function(result) {
        res.json(result);
    });
});

router.delete('/:id', function(req, res) {
    Blogentry().where('id', req.params.id).del('id').then(function(count) {
        console.log(count);
    }).then(function(result) {
        console.log(result);
    });
});

module.exports = router;
