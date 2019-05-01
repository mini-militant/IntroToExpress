var express=require('express');
var app=express();

app.use(express.static("public")); //This makes the pubic directory in use.

app.get("/",function(req,res){
  res.render("home.ejs");
});

app.get("/youAre/:thing",function(req,res){
  var thing=req.params.thing;
  res.render("some.ejs",{thingVar:thing});
  });

app.get('/posts',function(req,res){
  var posts=[
    {author:"Tagore", title:"TagoreBook"},
    {author:"Ram", title:"RamBook"},
    {author:"Shyam", title:"ShyamBook"}
  ];
  res.render("posts.ejs",{posts:posts});
})

app.listen(3000);
