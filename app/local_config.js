var knex = require('knex')({
  client: 'pg',
  connection: {
    host     : 'ec2-107-20-152-139.compute-1.amazonaws.com',
    port     : '5432',
    user     : 'arwzqgmvskbpru',
    password : '1KDxsrcFr5GiFRDbOS8kbxHr6x',
    database : 'd3pt591f13qttq',
    charset  : 'utf8',
    ssl      : true
  }
});

module.exports = knex;
