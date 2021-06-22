function truncGrad(G, GRADMAX){
 
  let iddown = []
  for(let i= 0 ; i< G.length ; i++){
    if(G[i] < -GRADMAX){
        iddown[i] = 1
    }else{
        iddown[i] = 0
    }
}
  
  let idup = []
   for(let i= 0 ; i< G.length ; i++){
    if(G[i] > GRADMAX){
        idup[i] = 1
    }else{
        idup[i] = 0
    }
}
for(let i= 0 ; i< iddown.length ; i++){
    if(iddown[i] == 1){
        G[i] = -GRADMAX
    }
} 
  for(let i= 0 ; i< idup.length ; i++){
    if(idup[i] == 1){
        G[i] = GRADMAX
    }
}
 
 
  return G
}
//teste
//g = [8,-4,9,2,6,-1]
//grad = 7
//console.log(truncGrad(g, grad))
//resposta =  [7, -4, 7, 2, 6, -1]
//IWMAX = 0.7
//dir = 1
//DIM = 10
//let GB = {
//     'X': [2,3,4]
//}
//let params = {
//     'IW': IWMAX,      
//     'CC': 0,
//     'SC': 4,     
//     'GC': 0.1      
//  }
//I = 0
//V = [1,2,3]