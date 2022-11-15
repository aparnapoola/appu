console.log("mean");
function mean(numbers){
  var total=0,i;
  for(i=0;i<numbers.length;i+=1){
    total+=numbers[i]
  }
  console.log(total/numbers.length)
}
mean([2,4,5,6,7])