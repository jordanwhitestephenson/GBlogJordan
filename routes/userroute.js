const router = require('express').Router()
const knex = require('../db/knex')

function userEntry() {
    return knex('username');
}

router.post('/', function(req, res) {
    userEntry().insert({
            name: req.body.name,
            email: req.body.email,
        }, 'id')
        .then(function(res) {
            res.json(result);
        });
});
router.get('/', function(req, res){
  userEntry().select().then(function(result){
    res.json(result);
  });
});

router.get('/:id', function(req, res){
  userEntry().where('id', req.params.id).first().then(function(result){
    res.json(result);
  });
});


router.put('/:id', function(req, res){
  userentry().where('id', req.params.id).update({
    body: req.body.body
  }).then(function(result){
    res.json(result);
  });
});


module.exports = router
