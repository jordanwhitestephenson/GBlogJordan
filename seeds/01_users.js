
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('username').del()
    .then(function () {
      // Inserts seed entries
      return knex('username').insert([
        {email: 'jordanwhitestephenson@gmail.com', name: 'Jordan Stephenson'},
        {email: 'joShmo@aol.com', name: 'Jo Shmo'},
        {email: 'Ernest@okstate.edu', name: 'Ernest'},
        {email: 'jack.black@gmail.com', name: 'Jack Black'}
      ]);
    });
};
