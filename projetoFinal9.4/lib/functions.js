import  math from "mathjs";



export function initialization(n ,d, r){


let rvalues = []

 for(let i=0; i<n; i++) {
     rvalues[i] = [];
     for(let j=0; j<d; j++) {
         rvalues[i][j] = math.random();         
     }
 }

 return math.add(math.multiply(r[0],rvalues),math.multiply(math.add(1,math.multiply(-1,rvalues)),r[1]))
}

//Teste initialization
//let r = [-47.5 , 47.5]
//console.log(initialization(2,2,r))
 
 
export function initFitness(X, N, callback){
 let fit = []
 fit = math.zeros(1, N)._data 
 for(let i= 0 ; i< N ; i++){
     fit[i] = callback(getRow(X, i))
 }
 return fit
}
//let x = [[6],[7]]
//let r = [1,2]
//let res = []
//res = initFitness(x, 2, sphere)
 
//teste iniFitness
//console.log(res)
//window.alert(res)
 
 
export function init(N, DIM, RANGE, VMAX, callback){
   let X = initialization(N, DIM, RANGE)
   let P = math.multiply(X,1)
   let XFIT = initFitness(X, N, callback)
   let PFIT = initFitness(X, N, callback)
   let OLDXFIT = initFitness(X, N, callback)
   let V = initialization(N, DIM, [-VMAX, VMAX])
  
   let I = math.zeros(N)._data
   let C = math.zeros(N)._data
   let G = new Array(N);
    for (let i = 0; i < N; i++){
     G[i] = new Array(DIM);
   }
  
   let p = {
 'X': X,       
 'XFIT': XFIT, 
 'V': V,      
 'P': P,       
 'PFIT': PFIT,
 'OLDXFIT': OLDXFIT,
 'I': I,
 'C': C,
 'G': G
 }
 return p
}
 
//teste init
//k = 1
//N = 20
//DIM = 10
//RANGE = [-47.5, 47.5]
//VMAX = k * (RANGE[1] - RANGE[0]) / 2;
//callback = sphere
 
//console.log(init(N, DIM, RANGE, VMAX, sphere))
//console.log("Oi")

 export function getRow(mat, lin){
   let row = new Array(mat[0].length)
   
   for (let i = 0; i < mat[0].length; i++) {  // devolve linha de matriz
     row[i] = mat[lin][i]
   }
   return row
 } 

 export function getBestGlobal(p) {
   
   let X1 = getRow(p.X, p.XFIT.indexOf(math.min(p.XFIT)))
   let XFIT = math.min(p.XFIT)
   let G = {
     'X1': X1,      
     'XFIT': XFIT
   }
   return G
 }
 //teste console.log(getBestGlobal(p))
 
 
export function getGradient(x0, callback){
   let g = math.zeros(math.size(x0))
   let fx0 = callback(x0)
   let step = 0.00001
   for (let i = 0; i < x0.length; i++) {
       let xli = x0.slice(0,x0.length) // faz a copia de x0 para xli
       xli[i] = x0[i] + step  
       g[i] = (callback(xli) - fx0)/step    
   }
   return g
}
 
//teste
//x0 = [6,4,9,7,3,1]
//console.log(getGradient(x0, sphere))
 
 
export function truncGrad(G, GRADMAX){
   
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
 
 export function getVelocity(X, V, P, S, GB, I, params, dir, DIM){
     
     let Vtemp = V
     
     Vtemp = math.add(math.multiply(params.IW , V),
        
         math.multiply(dir,
        
            math.add(math.multiply(I,params.CC,math.random(),math.subtract(P,X)),
                
               math.multiply(I,params.SC, math.random(),math.subtract(GB.X1,X)),
                  
                   math.multiply(math.subtract(I,1),params.GC,math.random(),S)
           )
        )
     )
     return Vtemp
    
 }
 
//console.log(getVelocity(V,V,V,V,GB,I,params,dir,DIM))
 
 export function truncVel(V, VMAX) {
 
   let iddown = []
 
   for (let i = 0; i < V.length; i++) {
     if (V[i] < -VMAX) {
       iddown[i] = 1
     } else {
       iddown[i] = 0
     }
   }
 
   let idup = []
 
   for (let i = 0; i < V.length; i++) {
     if (V[i] > VMAX) {
       idup[i] = 1
     } else {
       idup[i] = 0
     }
   }
 
   for (let i = 0; i < iddown.length; i++) {
     if (iddown[i] == 1) {
       V[i] = -VMAX
     }
   }
   for (let i = 0; i < idup.length; i++) {
     if (idup[i] == 1) {
       V[i] = VMAX
     }
   }
 
 
   return V
 
 }
 //teste
 //g = [8,-4,9,2,6,-1]
 
 //grad = 7
 
 //console.log(truncVel(g, grad))
 //resposta =  [7, -4, 7, 2, 6, -1]
 
 
 
export function updateBest(X, XFIT, P, PFIT, G){
   if (XFIT < PFIT){
       P = X
       PFIT = XFIT
       if(XFIT < G.XFIT){          
           G.X1 = X
           G.XFIT = XFIT
       }
   }
   return  [P,PFIT,G]
}
 
//teste

/*
function [P, PFIT, G] = updateBest( X, XFIT, P, PFIT, G )
    if(XFIT < PFIT)
        P = X;
        PFIT = XFIT;
        if(XFIT < G.XFIT)
            G.X = X;
            G.XFIT = XFIT;
        end
    end
end
X = [1,2,3]
P = [2,3,4]
XFIT = 2
PFIT = 3
 
let G = {
  'X': [1,2,4],       
  'XFIT': 2
}
updateBest(p.X[j], p.XFIT[j], p.P[j], p.PFIT[j], G) 
 
console.log(updateBest(X,XFIT,P,PFIT,G))
*/
//resultado : [1,2,3]     2    G
 
export function truncSpace(X, I, C ,r) {
 
   let iddown = []
 
   for (let i = 0; i < X.length; i++) {
     if (X[i] < r[0]) {
       iddown[i] = 1
     } else {
       iddown[i] = 0
     }
   }
 
   let idup = []
 
   for (let i = 0; i < X.length; i++) {
     if (X[i] > r[1]) {
       idup[i] = 1
     } else {
       idup[i] = 0
     }
   }
  
  
   if( iddown.includes(1) == true || idup.includes(1) == true){
       I = 1
       C = 0
   }
  
 
   for (let i = 0; i < iddown.length; i++) {
     if (iddown[i] == 1) {
       X[i] = r[0]
     }
   }
   for (let i = 0; i < idup.length; i++) {
     if (idup[i] == 1) {
       X[i] = r[1]
     }
   }
 
 
   return [X,I,C]
 
 }
 //teste
 //I = 4
 //C = 5
  //X = [5,8,2,3]
  //r =[1,2]
 //resultado esperado: X = [2,2,2,2], I = 1 , C = 0
 //console.log(truncSpace(X,I,C,r))
 
 
export function updateImportance(X,I,FIT,OLDFIT,C,G,GX,CMAX,N){
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
 
 
 
export function getDiversity(X, L, n, DIM){
   let avg = math.mean(X,0)   
   //let temp = X.slice(0,X.length)      
 
   let temp = [];
    for(let i=0; i<n; i++) {
       temp[i] = new Array(DIM);
    }
  
   for(let i = 0; i < n ; i++){
       for(let j = 0; j < DIM; j++){
           temp[i][j] = X[i][j]         
       }
   }
 
    for(let i = 0; i < n ; i++){
       for(let j = 0; j < DIM; j++){
           temp[i][j] = temp[i][j] - avg[j]         
       }
   }
  
   let d = math.sum(math.sqrt(math.dotMultiply(temp, temp).map(r => r.reduce((a, b) => a + b))))/(n * L)
   return d
}
//teste
//X = [[1,2,3,4,5],[2,3,4,5,6]]
//console.log(getDiversity(X,2,2))
//resultado : 0.559016
 
 
export function updateDir(dir, diversity, I, t, N){
   if(dir > 0 && diversity < t[0]){
       dir = -1
       I = math.ones(N)._data
   }else{
       if(dir < 0 && diversity > t[1]){
           dir = 1
           I = math.zeros(N)._data
       }
   }
  
   return [dir,I]
}
//teste
//dir = 1
//diversity = 1
//I= [0,0,0,0,0]
//t= [2,3,4,5,6]
//N = 5
//console.log(updateDir(dir, diversity, I, t, N))
//resultado [[1],[1],[1],[1],[1]]
 
 
export function initGrad(X, N ,D , callback){
  
   let G = math.zeros(N,D)
   let grad = []
 for (let i=0; i<N; i++){
      grad = getGradient(getRow(X,i), callback )
       for (let j=0; j<D; j++){
           G._data[i][j] = grad[j]
      }
   }
 
 
  return G._data
  
}
 
//teste
//X = [[8,4,3,8,9],[1,7,3,8,9]]
//N = 2
//D = 5
//console.log(initGrad(X,N,D,sphere))
//resultado 16.0000    8.0000    6.0000   16.0000   18.0000
//           2.0000   14.0000    6.0000   16.0000   18.0000

