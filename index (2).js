console.log("union")
var arr1,arr2,m,n
var i=0,j=0
arr1=[1,3,4,5,7]
arr2=[2,3,5,6]
m=arr1.length
n=arr2.length
while(i<n && j<n){
  if(arr1[i]<arr2[j]){
    console.log(arr1[i++])
  }
  else if(arr2[j]<arr1[i]){
    console.log(arr2[j++])
  }
  else
  console.log(arr2[j++])
}
while(i<m)
console.log(arr1[i++])
while(j<n)
console.log(arr2[j++])