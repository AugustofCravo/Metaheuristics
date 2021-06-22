function levi(x)
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