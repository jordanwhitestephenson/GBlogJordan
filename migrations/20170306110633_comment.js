//COMMENT//

exports.up = function(knex, Promise) {
    return knex.schema.createTable('comment', function(table) {
        table.increments();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.string('body');
        table.integer('username_id')
            .references('id')
            .inTable('username')
        table.integer('blog_id')
            .references('id')
            .inTable('blog')
            .onDelete('cascade')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('comment');
};
