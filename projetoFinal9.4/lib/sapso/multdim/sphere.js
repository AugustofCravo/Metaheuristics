import  math from "mathjs";

export function sphere(x)
{
  return math.multiply(x,math.ctranspose(x))
};
 //Teste sphere
//let x = [[1,2],[3,4]]
///console.log(x)
 //let z = []
//z = sphere(x)
// console.log(z)
