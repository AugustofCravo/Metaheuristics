function ellipsoid(x)
{
  let a = []
  for(i = 0; i < x.length ; i++){
     a[i] = (i+1)*x[i]
  }
 
  return  math.multiply(a,math.transpose(x))
}
 
//teste
//x = [1,2,3,5,6]
//console.log(ellipsoid(x))
//316