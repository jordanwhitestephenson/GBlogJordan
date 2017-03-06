
//COMMENT SEED??

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comment').del()
    .then(function () {
      // Inserts seed entries
      return knex('comment').insert([
        {body: 'This Blog IS AWESOME! COMMENTS'},
      ]);
    });
};
