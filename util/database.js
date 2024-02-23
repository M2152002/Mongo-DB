// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('node-complete', 'root', 'nodecomplete', {
//   dialect: 'mysql',
//   host: 'localhost'
// });

// module.exports = sequelize;

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db; 

const mongoConnect = (callback) => {
  MongoClient.connect('mongodb+srv://mahalakshmig21052002:AMnWESe2xSfxCV8m@cluster0.j6fjqjw.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0')
.then(client => {
  console.log('Connected!');
  _db = client.db();
  callback();
})
.catch(err => {
  console.log(err);
  throw err;
});
}

const getDb = () => {
  if(_db) {
    return _db;
  }
  throw 'No database found!';
}

// module.exports = mongoConnect;
exports.mongoConnect = mongoConnect;
exports.getDb = getDb;



