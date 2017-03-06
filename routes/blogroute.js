const router = require('express').Router()
const knex = require('../db/knex')

function Blogentry() {
    return knex('blog');
}

router.post('/', function(req, res) {
    Blogentry().insert({
            name: req.body.name,
            create_time: req.body.create_time,
            title: req.body.title,
            body: req.body.body
        }, 'id')
        .then(function(res) {
            res.json(result);
        });
});
router.get('/', function(req, res){
  Blogentry().select().then(function(result){
    res.json(result);
  });
});

router.get('/:id', function(req, res){
  Blogentry().where('id', req.params.id).first().then(function(result){
    res.json(result);
  });
});


router.put('/:id', function(req, res){
  Blogentry().where('id', req.params.id).update({
    body: req.body.body
  }).then(function(result){
    res.json(result);
  });
});


module.exports = router
