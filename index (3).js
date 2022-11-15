console.log("subarray!");
var sum=17
function subarray(arr){
  let currentsum=0
  for(i=0;i<=arr.length;i++){
  currentsum=arr[i]
  for(j=i+1;j<=arr.length;j++)
    if(currentsum==sum)
    console.log(i + "and" +j-1)
    
    
  }
}
subarray([15,2,4,8,9,5,10])

