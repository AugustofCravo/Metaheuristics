import  math from "mathjs";

export function ackley(x)
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

export function alpine(x)
{
 
  let sinx = []
 
  for(i = 0; i < x.length ; i++){
    sinx[i] = x[i]*math.sin(x[i])
  }
 
  let temp = math.add(sinx,math.multiply(0.1,x))
 
  let temp1 = []
 
  for(i = 0; i < x.length ; i++){
    temp1[i] = math.abs(temp[i])
  }
 
  return math.sum(temp1)
}

//teste
//x = [1,2,3,5,6]
//console.log(alpine(x))
//9.05454022514811

export function ellipsoid(x)
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

export function griewank(x)
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

export function levi(x)
{
   let w = []
   w = math.add(1,math.multiply(math.add(x,-1),1/4))
  
   let wminus = []
   for(i=0 ; i< w.length - 1; i++){
     wminus[i] = w[i]
   }
   //(w(1:d-1) - 1).^2
   let wminus1 = []
   wminus1 = math.add(wminus, -1)
  
   let wminus2 = []
   for(i=0 ; i< wminus1.length ; i++){
     wminus2[i] = wminus1[i]*wminus1[i]
   }
 
   let wminusk = []
   wminusk = math.add(wminus, 1)
 
   let sinx = math.sin(math.add(1,math.multiply(math.pi,wminusk)))
   let sinx1 = []
   for(i=0 ; i< sinx.length ; i++){
     sinx1[i] = sinx[i]*sinx[i]
   }
 
  
   let top1 = []
   top1 = wminus2
 
   let top2 = []
   top2 = math.add(1,math.multiply(10,sinx1))
  
   let top3 = []
   for(i=0 ; i< top1.length ; i++){
     top3[i] = top1[i]*top2[i]
   } 
  
   let temp12 =  math.sin(2*math.pi*w[x.length-1])
 
   let temp1 = (math.sin(math.pi * w[0]))*(math.sin(math.pi * w[0]))
   let temp2 = math.sum(top3)
   let temp3 = (w[x.length - 1]-1)*(w[x.length - 1]-1)*(1+ temp12*temp12)
   return temp1 + temp2 +temp3
  
}
/*
teste
x = [4,3,6,9,7]
 
console.log(levi(x))
//53.349240319387306
*/

export function rastrigin(x)
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

export function rosenbrock(x)
{
   let a = 1
   let b = 100
 
   let xplus1 = []
   for(i=0 ; i< x.length -1; i++){
     xplus1[i] = x[i+1]
   }
 
   let xminus1 = []
   for(i=0 ; i< x.length - 1; i++){
     xminus1[i] = x[i]
   }
 
   let xminus1s = []
   for(i=0 ; i< xminus1.length ; i++){
     xminus1s[i] = xminus1[i]*xminus1[i]
   }
 
   let xaux1 = math.add(xplus1, math.multiply(-1,xminus1s))
   let xaux2 = math.add(a, math.multiply(-1 , xminus1))
  
   return math.add(math.multiply(math.multiply(b,xaux1),math.transpose(xaux1)), math.multiply(xaux2,math.transpose(xaux2)))
}
 //teste
//let x = [2,5,7,1,6]
//console.log(rosenbrock(x))
//265453



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
