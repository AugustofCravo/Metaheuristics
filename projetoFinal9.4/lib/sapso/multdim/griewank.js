function griewank(x)
{
  let b = []
  for(i = 0; i < x.length ; i++){
     b[i] = math.cos(x[i]/math.sqrt(i+1))
  }
 
  return  1 + (1/4000)*(math.multiply(x,math.transpose(x))) - math.prod(b)
 
}
//teste
//x = [1,2,3,5,6]
//console.log(griewank(x))
//1.0284693921047043