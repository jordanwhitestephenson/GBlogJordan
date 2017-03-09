const router = require('express').Router()
const knex = require('../db/knex')
// const userdata = require('./commentroute')

function commentEntry() {
    return knex('comment');
}

router.get('/', function(req, res){
knex('comment')
  .leftJoin('blog', 'blog.id', '=', 'comment.blog_id')
  .leftJoin('username', 'username.email', '=', 'comment.username_email')
  .select('comment.created_at','blog.title', 'comment.id', 'comment.body','comment.blog_id', 'username_email')
  .then(function(result){
    res.json(result);
  })
})

//POST NEW COMMENT!//
router.post('/', function(req, res){
var newuserID;
//if commentted email is already in system
knex('username').where('email', req.body.email).select('id').then(result => {
    newuserID = result[0].id
    return knex('comment').insert({
      body: req.body.body,
      blog_id: req.body.blog_id,
      username_email: req.body.email
    }, 'id')
  .then(function(result){
    res.json(result);
  });
})
.catch(result => {
            console.log(`User not found, new userID is ${newuserID}`);
            //createnew Author
            knex('username').insert({
                    email: req.body.email
                    // username.id = result[0]
                    // name: req.body.name
                }, 'id')
            .then(result => {
                return commentEntry().insert({
                      body: req.body.body,
                      blog_id: req.body.blog_id,
                      username_email: req.body.email
                    }, ['body', 'blog_id', 'username_email'])
                        .then(result => {
                            res.json(result)
                        });
                })
        })
});




router.get('/', function(req, res){
  commentEntry().select().then(function(result){
    res.json(result);
  });
});

router.get('/:id', function(req, res){
  commentEntry().where('id', req.params.id).first().then(function(result){
    res.json(result);
  });
});


router.put('/:id', function(req, res){
  commentEntry().where('id', req.params.id).update({
    body: req.body.body
  }).then(function(result){
    res.json(result);
  });
});

router.delete('/:id', function(req, res) {
    commentEntry().where('id', req.params.id).del('id').then(function(count) {
        console.log(count);
    }).then(function(result) {
        console.log(result);
    });
});


module.exports = router
