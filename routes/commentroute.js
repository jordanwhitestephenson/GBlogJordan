const router = require('express').Router()
const knex = require('../db/knex')

function commentEntry() {
    return knex('comment');
}

router.post('/', function(req, res) {
    commentEntry().insert({
            name: req.body.name,
            email: req.body.email,
        }, 'id')
        .then(function(res) {
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
