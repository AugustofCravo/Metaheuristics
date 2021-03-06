function updateImportance(X,I,FIT,OLDFIT,C,G,GX,CMAX,N){
  for(let i=0;i<N;i++){
  let vet = math.add(getRow(X,i), math.multiply(GX,-1))
  for(let j=0;j< vet.length;j++){
    vet[j] = vet[j]*vet[j]
  }     
      if(I[i] == 0){     
         if(math.abs(FIT[i] - OLDFIT[i]) < 0.01 || math.norm(getRow(G,i)) < 0.01 ){
             C[i] = C[i] + 1
             if(C[i] == CMAX){
                 I[i] = 1
                 C[i] = 0
             }
         }  
         else{
             C[i] = 0
         }
      }
     else{ 
         if(math.sqrt(math.sum(vet)) < 0.00001){         
             I[i] = 0
             C[i] = 0
          }  
     }           
  }
  return [I,C]
}
//teste
//a = [0.005,0,0.004,0.007,0.003]
//a1 = [0.001,0.002,0.003,0.004,0.005]
//b = [[0.006,0.004,0.002,0.001,0.004],[0.006,0.007,0.009,0.002,0.001]]
//c = 2
//console.log(updateImportance(b,a,a1,a,a1,b,c,c,c))