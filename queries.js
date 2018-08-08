const database = require("./database-connection");

module.exports = {
    list(){
      return database('gametable');
    },
    read(id){
      return database('gametable').where('id', id).first();
    },
    create(game){
      return database('gametable').insert(game).returning('*').then(record => record[0]);
    },
    update(id, game){
      return database('gametable').where('id', id).update(game).returning('*').then(record => record[0]);
    },
    delete(id){
      return database('gametable').where('id', id).del();
    }
};
