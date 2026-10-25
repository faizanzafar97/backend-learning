var express = require('express');
var router = express.Router();
const userModel = require('./users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/create', async function(req, res, next) {
  try {
    const createdUser = await userModel.create({
      username: 'faizan',
      name: 'faizanzafar',
      age: 45,
    });
    res.send(createdUser);
  } catch (err) {
    next(err);
  }
});

router.get('/allusers', async function(req, res, next) {
  let allusers =await userModel.find();
  console.log(allusers);
  res.send(allusers);
  
});

router.get('/delete', async function(req, res, next) {
  let allusers =await userModel.findOneAndDelete({
    username:"harsh",
  });
  
  res.send(deleteusers);
  
});

module.exports = router;
