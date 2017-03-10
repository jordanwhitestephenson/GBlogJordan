//CREATE_BLOG_TABLE//

exports.up = function(knex, Promise) {
  return knex.schema.createTable('blog', function(table){
    table.increments()
    table.string('name')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.string('title')
    table.string('body', 5000)
    table.integer('username_id').notNullable()
          .references('id')
          .inTable('username')
          .onDelete('cascade')
  })
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('blog');
};
