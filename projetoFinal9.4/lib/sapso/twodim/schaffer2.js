function schaffer2(x)
{
  return 0.5 + (math.pow(math.sin(math.pow(x[0],2) - math.pow(x[1],2)),2) - 0.5)/ math.pow(1 + 0.001*(math.pow(x[0],2) + math.pow(x[1],2)),2)
}
//teste
//let x =[9,7,2]
//console.log(schaffer2(x))
// resultado 0.3465591548165283