const express = require('express')
const app = express()
const port = 3000


app.get('/', function(req, res) {
  console.dir(app.mountpath);
  console.log(app.mountpath);
  res.send('Send root!')
});

app.get('/about', function(req, res) {
  res.send('Send about page!')
});

app.get('/about/about-me', function(req, res) {
  res.send('Send about-me page!')
});

app.get('/blog', function(req, res) {
  res.json({
    text: 'Send blog page!'
  });
});

app.get('/post/:id', function(req, res) {
  res.send(req.params.id);});

app.get('/about/:name/:nickname', function(req, res) {
  res.send(req.params.name + ' is so ' + req.params.nickname);
});

app.get('/api/user/:number',function(req,res){
  var a={
    "id":1,
    "name":"Kay",
    "age":39
  };
  var b={
    "id":2,
    "name":"Amy",
    "age":18
  };

  if(req.params.number == 1) {
    res.json(a);
  } else if(req.params.number == 2) {
    res.json(b);
  } else {
    res.send('Not Found');
  }
});

app.get('/hell', function(req,res){
  res.send(req.query);
});

app.get('/gogo', function (req,res){
  res.json(req.query);
});

app.get('/hey/:yo', function (req,res) {
  res.send(req.params.yo + JSON.stringify(req.query));
});

app.get('/api/query', function (req,res){
  res.json(req.query);
});
app.listen(port,function(){
  console.log('Example app is running on port 3000')
});