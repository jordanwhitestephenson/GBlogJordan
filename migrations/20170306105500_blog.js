//CREATE_BLOG_TABLE//

exports.up = function(knex, Promise) {
  return knex.schema.createTable('blog', function(table){
    table.increments().notNullable()
    table.string('name')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.string('title')
    table.string('body')
    table.integer('username_id')
          .references('id')
          .inTable('username')
  })
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('blog');
};
