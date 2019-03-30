// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://forumadmin:pass123@localhost/communityforum',
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  },

};
