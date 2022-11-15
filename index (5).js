console.log("duplicate!");
let index=0,newarr=[]
const arr=[6,9,15,6,13,9,11,15]
  for(let i=0;i<arr.length-1;i++){
    for(j=i+1;j<arr.length;j++){
      if(arr[i]===arr[j]){
        newarr[index]=arr[i]
        index++
      }
    }
  }
  console.log(newarr)

//duplicate([6,9,15,6,13,9,11,15])