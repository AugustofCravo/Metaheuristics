import  math from "mathjs";


export function debi(x)
{
  return -0.5*(math.pow(math.sin(5*math.pi*x[0]),6) + math.pow(math.sin(5*math.pi*x[0]),6))
}
 
//
//let x =[1,2,3]
//teste
//console.log(debi(x))
//function debi(x)
//resultado -5.270904363473971e-92

export function himmelblau(x)
{
  return math.pow(math.pow(x[0],2) + x[1] - 11,2) + math.pow(math.pow(x[1],2) + x[0] -7, 2)
}
//
//teste
//let x = [9,7,2]
//
//console.log(himmelblau(x))
//resultado 8530

export function impossible(x)
{
  return 1
}
 
//teste
//let x =[[1,2,3],[2,3,4]]
//console.log(impossible(x))
//resultado 1

export function levi13(x)
{
  return math.pow(math.sin(3*math.pi*x[0]),2) + math.pow((x[0] -1),2)*(1 + math.pow(math.sin(3*math.pi*x[1]),2)) + math.pow((x[1] -1),2)*(1 + math.pow(math.sin(2*math.pi*x[1]),2))
}
 
//teste
//x =[1,2,3]
//console.log(levi13(x))

export function schaffer2(x)
{
  return 0.5 + (math.pow(math.sin(math.pow(x[0],2) - math.pow(x[1],2)),2) - 0.5)/ math.pow(1 + 0.001*(math.pow(x[0],2) + math.pow(x[1],2)),2)
}
//teste
//let x =[9,7,2]
//console.log(schaffer2(x))
// resultado 0.3465591548165283

export function schaffer4(x)
{
  return 0.5 + (math.cos(math.sin(math.abs(math.pow(x[0],2) - math.pow(x[1],2))))-0.5)/(1 + 0.001*(math.pow(x[0],2) + math.pow(x[1],2)))
}
//teste
//let x= [1,2,3]
//console.log(schaffer4(x))
//resultado 0.987620 

export function schwefel(x)
{ 
  return 418.9829 * x.length - math.sum(math.multiply(x,math.sin(math.sqrt(math.abs(x)))))
}
 
//teste
//let x= [1,2,3]
//console.log(schwefel(x))
//1251.1706171882354

export function vincent(x)
{ 
  return -0.5*(math.sin(10*math.log(x[0])) + math.sin(10*math.log(x[1])))
}
 
//teste
//let x= [1,2,3]
//console.log(vincent(x))
//-0.3019107135584345
//resultado 1