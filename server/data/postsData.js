const database = require('../infra/database');

exports.getPosts = function (){
    return database.query('SELECT * FROM blog.post');
}