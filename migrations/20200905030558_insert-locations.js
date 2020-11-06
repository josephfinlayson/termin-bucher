const fs = require('fs')
exports.up = function(knex) {
    const amtsList = JSON.parse(fs.readFileSync('amts2.json'))

    return knex.batchInsert('locations', amtsList, 5)
    .then(function(done) { console.log(done) })
};

exports.down = function(knex) {
  
};

