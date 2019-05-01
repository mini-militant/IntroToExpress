var express= require('express');
var app=express();

app.get("/",function(req,res){
  res.send("Hi There");
});

app.get("/dog",function(req,res){
  res.send("Dogs World");
});

app.get("/alien",function(req,res){
  res.send("Alien was here");
});

app.get("/r/:subredditName",function(req,res){
  res.send("You are inside a subreddit");
});

app.get("*",function(req,res){
  res.send("You are a Super Star.");
});

//What if you have multiple links to visit by user.
//you will nnot go on typing for each links
//make it in a pattern




app.listen(3000);
