function signs(a,b){
if(typeof(a)!="number" || typeof(b)!="number"){
    console.log("parameters must be numbers")
  }
  else if(a>0 && b>0){
    console.log('signs are not opposite')
  }
  else
  console.log("signs are opposite")
}
signs(100,-100)
signs(100,100)
signs('100',100)