const router = require('express').Router()
const knex = require('../db/knex')
// const userdata = require('./commentroute')

function commentEntry() {
    return knex('comment');
}

router.get('/', function(req, res){
knex('comment')
  .leftJoin('blog', 'blog.id', '=', 'comment.blog_id')
  .leftJoin('username', 'comment.id', '=', 'username.id')
  .select()
  .then(function(result){
    res.json(result);
  })
})
router.post('/', function(req, res){
knex('comment')
  .insert({
    body: req.body.body,
    username_id: req.body.username_id,
    blog_id: req.body.blog_id
   }, 'id')
  .then(function(result){
    res.json(result);
  });
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


module.exports = router
