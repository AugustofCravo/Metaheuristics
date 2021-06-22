function alpine(x)
{
 
  let sinx = []
 
  for(i = 0; i < x.length ; i++){
    sinx[i] = x[i]*math.sin(x[i])
  }
 
  let temp = math.add(sinx,math.multiply(0.1,x))
 
  let temp1 = []
 
  for(i = 0; i < x.length ; i++){
    temp1[i] = math.abs(temp[i])
  }
 
  return math.sum(temp1)
}

//teste
//x = [1,2,3,5,6]
//console.log(alpine(x))
//9.05454022514811