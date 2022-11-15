console.log("median")
var num=[1,4,3,5,6,7]
num.sort()
var median
var n=num.length
  if(n%2==0){
    median=(num[n/2 -1]+num[n/2])/2
  }
  else
  median=num[(n-1)/2]
  console.log(median)

