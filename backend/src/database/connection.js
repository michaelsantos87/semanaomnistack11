const knex = require('knex')
const configuration = require('../../knexfile')

const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development;


//console.log("===================================================================MJS===============" + process.env.NODE_ENV);
//console.log("===================================================================MJS===============" + configuration.test);

//console.log(config);

const connection  = knex(config);

module.exports = connection;