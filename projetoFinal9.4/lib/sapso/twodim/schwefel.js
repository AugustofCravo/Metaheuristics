function schwefel(x)
{ 
  return 418.9829 * x.length - math.sum(math.multiply(x,math.sin(math.sqrt(math.abs(x)))))
}
 
//teste
//let x= [1,2,3]
//console.log(schwefel(x))
//1251.1706171882354