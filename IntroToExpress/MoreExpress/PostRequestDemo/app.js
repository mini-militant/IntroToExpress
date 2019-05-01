var express=require('express');
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine','ejs');

var friends=["Tony","Miranda","Jackie","Stark"];

app.get('/',function(req,res){
  res.render('home');
});

// we use post when adding data to something. when we are adding to database.
//get is only for retrieving information.




app.get('/friends',function(req,res){
    res.render('friends',{friends:friends});
});

app.post('/addfriend',function(req,res){
  var newFriend=req.body.newFriend;
  friends.push(newFriend);
  res.redirect('/friends');
});

app.listen(3000);
