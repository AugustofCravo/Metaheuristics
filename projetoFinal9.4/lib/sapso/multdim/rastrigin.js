function rastrigin(x)
{
  let a = 10
  let n = x.length
 
  let u = []
  for(i = 0; i < x.length ; i++){
    u[i] = math.cos(2*math.pi*x[i])
  }
 
  let k = []
  for(i = 0; i < x.length ; i++){
    k[i] = x[i]*x[i]
  }
 
  return a*n + math.sum(math.add(k, math.multiply(-a, u)))
}
//teste
//x = [1,2,3,5,6]
//console.log(rastrigin(x))
//194