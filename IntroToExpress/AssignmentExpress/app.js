var express=require('express');
var app= express();

app.get("/speak/:animalName",function(req,res){
  var name=req.params.animalName;
  res.send("The "+name+" says something");
});

app.get("/repeat/:message/:times",function(req,res){
  var message=req.params.message;
  var times=Number(req.params.times);
  var result="";
  for(var i=0;i<times;i++){
    result +=message+" " ;
  }
  res.send(result);
});

app.listen(3000);
