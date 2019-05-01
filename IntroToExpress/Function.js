function average(scores){
  console.log("hi");
  var total=0;
  scores.forEach(function(score){
    total+=score;

  });
  var average=total/scores.length;
  var roundOff=Math.round(average);
  return roundOff;
  console.log("Bye");
}
module.exports=average;
