const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const data = require('./seed.js');
let dbo;
const ObjectID = require('mongodb').ObjectID;

MongoClient.connect(url, { useNewUrlParser: true }, (err, database) => {
  if (err) {
    console.log(`there's an error: ${err}`);
  } else {
    console.log('mongo connection made');
    dbo = database.db('fetch').collection('userInfos');
    dbo.insertMany(data(10), (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log('inserted successfully');
      }
    });
  }
});

const getAll = (req, res) => {
  dbo.find({}, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};

const getUserInfo = (req, res) => {
  let { username, password } = req.body;
  dbo.findOne({ username, password }, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};

const getUserInfoID = (req, res) => {
  let { _id } = req.params;
  dbo.findOne({ _id }, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};

const createUser = (req, res) => {
  let {
    username,
    password,
    email,
    preferences,
    matches,
    images,
    animalgender,
    animalbreed,
    description,
    location
  } = req.body;
  dbo.insert(
    {
      username,
      password,
      email,
      preferences,
      matches,
      images,
      animalgender,
      animalbreed,
      description,
      location
    },
    (err, data) => {
      if (err) {
        res.status(404).send('unable to create profile');
      } else {
        res.status(200).send('profile created');
      }
    }
  );
};

const updateUser = (req, res) => {
  let {
    username,
    password,
    email,
    preferences,
    matches,
    images,
    animaltype,
    animalgender,
    animalbreed,
    description,
    location
  } = req.body;
  let { _id } = req.params;

  dbo.updateOne(
    { _id: new ObjectID(_id) },
    { $set: { images, description } },
    (err, data) => {
      if (err) {
        res.status(404).send(err);
      } else {
        dbo.findOne({ _id: new ObjectID(_id) }, (err, info) => {
          res.status(200).send(info);
        });
      }
    }
  );
};

module.exports = {
  getUserInfo,
  createUser,
  updateUser,
  getUserInfoID,
  getAll
};
