function range(start,end){
  if(end-start==2){
    return[start+1]
  }
  else
  var list=range(start,end-1)
  list.push(end-1)
  return list
}
console.log(range(2,9))
console.log(range(1,3))