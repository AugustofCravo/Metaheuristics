function rosenbrock(x)
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