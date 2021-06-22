function ackley(x)
{ 
  let d = x.length
 
  let cosx = 0
 
  for(i = 0; i < d ; i++){
    cosx = cosx + math.cos(2*math.pi*x[i])
  }
 
  let p1 = -20 * math.exp(-0.2*math.sqrt(math.multiply(x,x)/d))
  let p2 = -math.exp(math.multiply(cosx,1/d)) + math.exp(1) + 20
 
  return p1 + p2
 
}
//x = [1,2,3,5,6]
//console.log(ackley(x))
//10.782207310357974