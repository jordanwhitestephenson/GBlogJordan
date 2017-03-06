exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blog').del()
    .then(function () {
      // Inserts seed entries
      return knex('blog').insert([
        {
        name: 'Jordan Stephenson',
        title: 'Cat Recipe',
        body: 'Play with cats and stuff.',
        username_id: knex('username').where('email', 'jordanwhitestephenson@gmail.com').select('id')
      },
        {
        name: 'JoShmo',
        title: 'My First Blog Post',
        body: 'Writing a blog post about how much cats suck.',
        username_id: knex('username').where('email', 'Ernest@okstate.edu').select('id')
      },
      {
      name: 'Jordan Stephenson',
      title: 'CatKnip Recipes',
      body: 'Everything should be found on Pinterest',
      username_id: knex('username').where('email', 'Ernest@okstate.edu').select('id')
    }
      ]);
    });
};
