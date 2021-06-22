function levi13(x)
{
  return math.pow(math.sin(3*math.pi*x[0]),2) + math.pow((x[0] -1),2)*(1 + math.pow(math.sin(3*math.pi*x[1]),2)) + math.pow((x[1] -1),2)*(1 + math.pow(math.sin(2*math.pi*x[1]),2))
}
 
//teste
//x =[1,2,3]
//console.log(levi13(x))
//resultado 1