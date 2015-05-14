var knex = require('knex')({
  client: 'pg',
  connection: {
    host     : 'ec2-107-20-152-139.compute-1.amazonaws.com',
    port     : '5432',
    user     : 'zhznzowfpbgfdu',
    password : '6keAIlswCYtY898NE5iVeY654z',
    database : 'd4cimi02te5n7m',
    charset  : 'utf8',
    ssl      : true
  }
});

module.exports = knex;
