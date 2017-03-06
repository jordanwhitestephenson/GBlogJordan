//this file will be responsible for holding the parameters of our database

module.exports = {
  development: {
    client : 'pg',
    connection: 'postgres://localhost:5432/gBlog'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
