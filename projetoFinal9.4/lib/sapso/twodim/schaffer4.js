function schaffer4(x)
{
  return 0.5 + (math.cos(math.sin(math.abs(math.pow(x[0],2) - math.pow(x[1],2))))-0.5)/(1 + 0.001*(math.pow(x[0],2) + math.pow(x[1],2)))
}
//teste
//let x= [1,2,3]
//console.log(schaffer4(x))
//resultado 0.987620 