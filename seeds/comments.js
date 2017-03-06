
//COMMENT SEED??

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comment').del()
    .then(function () {
      // Inserts seed entries
      return knex('comment').insert([
        {body: 'This Blog IS AWESOME! COMMENTS',
        username_id: knex('username').where('email', 'jordanwhitestephenson@gmail.com').select('id'),
         blog_id: knex('blog').where('id', 1).select('id')},
         {body: 'This blog sucks, horrible post',
         username_id: knex('username').where('email', 'jordanwhitestephenson@gmail.com').select('id'),
          blog_id: knex('blog').where('id', 2).select('id')},
          {body: 'I would say this post is a 7 out of 10',
          username_id: knex('username').where('email', 'jordanwhitestephenson@gmail.com').select('id'),
           blog_id: knex('blog').where('id', 2).select('id')}
      ]);
    });
};
