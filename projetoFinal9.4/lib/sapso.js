// problema no truncspace
// Atualizado em 13/11/2020
// Adicionado Initialization (funcionando)
// Adicionado InitFitness (funcionando)
// Adicionado Init (funcionando)
// Adicionado getBestGlobal (funcionando)
// Adicionado getGradient (funcionando)
// Adicionado truncGrad (funcionando)
// Adicionado getVelocity ( funcionando)
// Adicionado truncVel (funcionando)
// Adicionado updateBest (funcionado)
// Adicionado truncSpace(funcionando)
// Adicionado updateImportance(funcionando)
// Adicionado getDiversity (funcionando)
// Adicionado updateDir (funcionando)
// Adicionado initGrad ( funcionando)
// Funções revisadas, corrigidos erros
// Adicionado Main (incompleto) fazer teste do main ultima parte do truncsapace
const math = require('mathjs');
 function sphere(x)
{
  return math.multiply(x,math.ctranspose(x))
}
 //Teste sphere
//let x = [[1,2],[3,4]]
///console.log(x)
 //let z = []
//z = sphere(x)
// console.log(z)
function initialization(n ,d, r){
 
/*let rvalues = [
   [0.8669  ,  0.2436  ,  0.0684  ,  0.3180  ,  0.2748  ,  0.7624 ,   0.0249  ,  0.1930,    0.6423  ,  0.5761],
   [0.4068  ,  0.7851  ,  0.4363  ,  0.6086   , 0.2415  ,  0.5761   , 0.6714  ,  0.3416  ,  0.2213  ,  0.8106],
   [0.1126  ,  0.0741 ,   0.1739 ,   0.9102  ,  0.2431  ,  0.7477 ,   0.8372  ,  0.9329  ,  0.8371  ,  0.4038],
   [0.4438  ,  0.3939  ,  0.0261 ,   0.9091 ,   0.1542 ,   0.6455  ,  0.9715  ,  0.3907 ,   0.9711  ,  0.9884],
   [0.3002  ,  0.0034  ,  0.9547  ,  0.5916   , 0.9564  ,  0.1232  ,  0.0569  ,  0.2732 ,   0.8464  ,  0.0900],
   [0.4014  ,  0.2207  ,  0.4306  ,  0.3326  ,  0.9357  ,  0.5044  ,  0.4503  ,  0.1519 ,   0.5060  ,  0.3209],
   [0.8334   , 0.0013 ,   0.9616 ,   0.8531  ,  0.8187  ,  0.3473  ,  0.5825  ,  0.3971  ,  0.2789  ,  0.5114],
   [0.4036  ,  0.1892  ,  0.7624 ,   0.4424  ,  0.7283  ,  0.0921  ,  0.6866  ,  0.3747  ,  0.7466  ,  0.0606],
   [0.3902  ,  0.1425   , 0.0073 ,   0.9044  ,  0.1758  ,  0.1478  ,  0.7194  ,  0.1311 ,   0.2369  ,  0.7257],
   [0.3604  ,  0.2681  ,  0.6800  ,  0.0332  ,  0.3604   , 0.1982  ,  0.6500 ,   0.4350  ,  0.9573  ,  0.5566],
   [0.1403   , 0.1749  ,  0.7060  ,  0.5324   , 0.1888  ,  0.6723 ,   0.7269  ,  0.0915  ,  0.6203  ,  0.5294],
   [0.2601  ,  0.1386  ,  0.6451  ,  0.7165  ,  0.0012  ,  0.4315  ,  0.3738 ,   0.6146  ,  0.6003   , 0.8300],
   [0.0868  ,  0.5989  ,  0.5523  ,  0.1793 ,   0.3164  ,  0.6944  ,  0.5816 ,   0.0110 ,   0.1726   , 0.8588],
   [0.4294   , 0.9011  ,  0.2181  ,  0.3365 ,   0.6996  ,  0.2568 ,   0.1161,    0.5733  ,  0.0903 ,   0.7890],
   [0.2573  ,  0.9394  ,  0.7724  ,  0.1877  ,  0.6253  ,  0.0098  ,  0.0577  ,  0.7897  ,  0.2553  ,  0.3178],
   [0.2976  ,  0.2212  ,  0.2280  ,  0.3219  ,  0.5431  ,  0.5323  ,  0.9798 ,   0.2354  ,  0.8586  ,  0.4522],
   [0.4249  ,  0.4827  ,  0.3709 ,   0.4039  ,  0.4390  ,  0.2794  ,  0.2848  ,  0.4480  ,  0.9111  ,  0.7522],
   [0.1192  ,  0.3760  ,  0.8909 ,   0.5486  ,  0.2874  ,  0.9462  ,  0.5950   , 0.5694  ,  0.6996   , 0.1099],
   [0.4951   , 0.5238  ,  0.8564  ,  0.0487  ,  0.5017 ,   0.9064   , 0.9622  ,  0.0614  ,  0.7252  ,  0.1097],
   [0.7064  ,  0.2649  ,  0.4024  ,  0.5527   , 0.7615  ,  0.3927  ,  0.1858  ,  0.4963  ,  0.2299 ,   0.2699],
]*/
 
let rvalues = []
 
for(let i=0; i<n; i++) {
    rvalues[i] = [];
    for(let j=0; j<d; j++) {
        rvalues[i][j] = math.random();        
    }
}
   /*
let rvalues = [[0.8147  ,  0.2785  ,  0.9572],
   [0.9058  ,  0.5469 ,   0.4854],
   [0.1270  ,  0.9575  ,  0.8003],
   [0.9134  ,  0.9649  ,  0.1419],
   [0.6324  ,  0.1576  ,  0.4218],
   [0.0975  ,  0.9706  ,  0.9157]
];
*/
 
return math.add(math.multiply(r[0],rvalues),math.multiply(math.add(1,math.multiply(-1,rvalues)),r[1]))
}
 
//Teste initialization
//let r = [-47.5 , 47.5]
//console.log(initialization(2,2,r))
function initFitness(X, N, callback){
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
function init(N, DIM, RANGE, VMAX, callback){
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
  /*let p = {
  'X': [[15.000499999999995, 44.10850000000001, -2.7834999999999965], [35.767500000000005, 28.3005, -9.813499999999998], [-6.061, -27.056000000000008, 46.056], [26.5715, -13.7085, 17.632], [14.782, 38.626999999999995, 20.899999999999995], [46.322, 27.331500000000005, -28.310000000000002]
  ],
  'XFIT': [
    2178.3226447500006, 2176.5371387500004, 2889.917993, 1204.8550085000002, 2147.3626529999997, 3694.194676250001
  ]
 
 }*/
function getRow(mat, lin){
  let row = new Array(mat[0].length)
 
  for (let i = 0; i < mat[0].length; i++) {  // devolve linha de matriz
    row[i] = mat[lin][i]
  }
  return row
}
 
function getBestGlobal(p) {
 
  let X1 = getRow(p.X, p.XFIT.indexOf(math.min(p.XFIT)))
  let XFIT = math.min(p.XFIT)
  let G = {
    'X1': X1,     
    'XFIT': XFIT
  }
  return G
}
//teste console.log(getBestGlobal(p))
function getGradient(x0, callback){
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
function getVelocity(X, V, P, S, GB, I, params, dir, DIM){
    /*V = math.add(math.multiply(params.IW , V),
      
        math.multiply(dir,
      
           math.add(math.multiply(I,params.CC,math.random(),math.subtract(P,X)),
              
              math.multiply(I,params.SC, math.random(),math.subtract(GB.X,X)),
                
                  math.multiply(math.subtract(I,1),params.GC,math.random(),S)
          )
       )
    )
    return V*/
    let Vtemp = V
   
    Vtemp = math.add(math.multiply(params.IW , V),
      
        math.multiply(dir,
      
           math.add(math.multiply(I,params.CC,0.8,math.subtract(P,X)),
              
              math.multiply(I,params.SC, 0.7,math.subtract(GB.X1,X)),
                
                  math.multiply(math.subtract(I,1),params.GC,0.6,S)
          )
       )
    )
    return Vtemp
  
}
//console.log(getVelocity(V,V,V,V,GB,I,params,dir,DIM))
function truncVel(V, VMAX) {
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
function updateBest(X, XFIT, P, PFIT, G){
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
function truncSpace(X, I, C ,r) {
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
function getDiversity(X, L, n){
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
function updateDir(dir, diversity, I, t, N){
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
function getGradient(x0, callback){
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
function initGrad(X, N ,D , callback){
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
///////////// Função teste //////////////
let DIM = 10                                                     // number of dimensions
let f = sphere                                                 // name of the test function
let RANGE = [-47.5 , 47.5]                                       // search domain
//////////// Parâmetros PSO /////////////
let NPART = 20                                                   // number of particles
let MAXITER = 5000                                            // max number of iterations
let STOPC = 0.0000000001                                         // stop criterion
let k1 = 1
let CMAX = 3                                                //consecutive evaluations
let DT = [0.1 , 0.25 ]                                           //dlow and dhigh
let dir = 1                                                      //attraction as default
 
let cont = 0
let IWMIN = 0.4
let IWMAX = 0.7
let params = {
   'IW': IWMAX,      
   'CC': 0,
   'SC': 4,     
   'GC': 0.1      
}
let L = math.norm(math.multiply(math.ones(DIM)._data, (RANGE[1] - RANGE[0])))               // diagonal length of the space
let VMAX = k1 * (RANGE[1] - RANGE[0]) / 2                                              // maximum velocity
let iw = []
for(let i = 0; i< MAXITER; i++){
  iw[i] = IWMAX - (i+1) * (IWMAX - IWMIN) / MAXITER
}                                                                                 // inertia weight through iterations
///////////////Main iteration/////////////////
let p = init(NPART, DIM, RANGE, VMAX, f)
let G1 = getBestGlobal(p);
 
let c = 0
// p.g está declarado em p(init) como uma matriz de indefinidos.
for (let i1 = 0; i1 < MAXITER; i1++){
 
  for (let j = 0; j < NPART; j++){
   
      for(let k = 0; k < DIM; k++){
          p.G[j][k] = getGradient(p.X[j], f)[k]
        }
     
      for (let k = 0; k < DIM; k++){         
          p.G[j][k] = truncGrad(p.G[j], VMAX)[k]  // trunc gradient                        
      }  
    
      for (let k = 0; k < DIM; k++){        
          p.V[j][k] = getVelocity(p.X[j], p.V[j], p.P[j], p.G[j], G1, p.I[j], params, dir, DIM)[k]        
      }        
  
      for (let k = 0; k < DIM; k++){
          p.V[j][k] = truncVel(p.V[j], VMAX)[k] // trunc velocity
      }    
       
      p.X[j] = math.add(p.X[j] , p.V[j])    //trolotinho                 
     
 
let trunc = truncSpace(p.X[j],p.I[j],p.C[j],RANGE)   // I e C são matrizes, mas dependendo de truncspace eles se                          //tornam numeros
 trunc1 = trunc[0]
 p.I[j] = trunc[1]                 
 p.C[j] = trunc[2]
 for (let k = 0; k < DIM; k++){
        p.X[j][k] = trunc1[k]
      }   
    
p.XFIT[j] = sphere(p.X[j])
 
 
let update = updateBest(p.X[j], p.XFIT[j], p.P[j], p.PFIT[j], G1)  
p.PFIT[j] = update[1]
G1 = update[2]
for (let k = 0; k < DIM; k++){        
          p.P[j][k] = update[0][k]
       }
 
 }
 cont=cont +1
console.log(cont)
let update1 = updateImportance(p.X, p.I, p.XFIT, p.OLDXFIT, p.C, p.G, G1.X1, CMAX, NPART)
 p.I = update1[0]
p.C = update1[1]
// escolha de partícula
let diversity = getDiversity(p.X, L, NPART)
let updateDir1 =  updateDir(dir, diversity, p.I, DT, NPART)
dir = updateDir1[0]
p.I = updateDir1[1]
 
for (let k = 0; k < NPART; k++){
          p.OLDXFIT[k] = p.XFIT[k] // igualando OLDXFIT com XFIT
      }
params.IW = iw[i1]
//console.log('ITER: ', num2str[i], ' | G: ', num2str[G.XFIT], ' | dir: ', num2str[dir], ' | Div: ', num2str[diversity])
if(G1.XFIT < STOPC)break
 
}
 
console.log(p)
console.log(G1)
/*
X
 -47.5000  -47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000  -47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000   47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000   47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000   47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000  -47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000   47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000   47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000   47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000  -47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000   47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000   47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000   47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000   47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000   47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000  -47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
  47.5000  -47.5000   47.5000   47.5000  -47.5000   47.5000   47.5000   47.5000  -47.5000  -47.5000
 -47.5000   47.5000  -47.5000  -47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000   47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000  -47.5000  -47.5000  -47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 
XFIT
  1.0e+04 *
 
   2.2563    2.2563    2.2563    2.2563    2.2563    2.2563    2.2563    2.2563    2.2563    2.2563    2.2563    2.2563    2.2563    2.2563    2.2563    2.2563    2.2563    2.2563    2.2563    2.2563
 
V
 -47.5000  -47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000  -47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000   47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000   47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000   47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000  -47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000   47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000   47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000   47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000  -47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000   47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000   47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000   47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000   47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000   47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000  -47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
  47.5000  -47.5000   47.5000   47.5000  -47.5000   47.5000   47.5000   47.5000  -47.5000  -47.5000
 -47.5000   47.5000  -47.5000  -47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000   47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000  -47.5000  -47.5000  -47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 
P
 -12.2607   -0.3681    2.7013    5.7516   38.2043    1.0771  -18.3132   -4.7600    4.6004    1.5176
 -24.9819   -7.5704    3.2455   12.8345   17.0119    9.2749   14.2870   -9.8232    3.0783    1.5176
   2.2406    7.5783   -6.6622   -7.5783    4.8576   15.4372   -7.5783  -15.5605  -20.8059  -16.9424
 -18.4479  -10.8071   -6.6622   -7.5783   15.9981   13.1470   -7.5783   -9.1625  -23.3931  -10.2150
 -24.3557    7.5783  -15.4379    9.3301   16.2052    7.5783    7.5783  -10.8734  -15.9597   16.6663
  -2.1926   23.6932   -1.9682   15.1207   28.0804    0.0117   -0.1324   24.2334    3.0840   11.3125
   4.2544    7.5783  -15.4379   -7.5783   16.2052  -13.3083    8.4032  -17.7934  -14.6694   -3.5017
 -24.7702    7.0735    4.0117   16.8447   16.2052    7.5783   14.0680  -13.4875  -20.6468   16.6663
 -31.0190         0         0         0         0         0   14.5681         0   -7.8593   13.6224
  -6.6579    2.3761    2.9329  -18.3132   16.2095  -14.6029  -11.3710   13.5768  -11.7408  -10.8676
   2.2406    7.5783   21.8093    3.3002   16.0118   13.7475   14.9711   -0.4038   -4.7053   10.8418
  -4.8541    7.5783   20.4445   14.7380   15.9981   -6.9772   -4.3644   15.7683   -6.7425    1.5097
   2.2406   10.0737   12.6337    7.5783   20.3220   14.2428   20.8877   -0.4038    3.0811    1.5097
 -24.1921   -7.5783   -8.9513  -13.5503   16.2052  -15.3363    7.5783   11.5616    3.0811   11.7662
 -11.0707         0    6.3574         0   28.6925         0         0    3.5635  -10.7705   -4.0571
 -15.4378   -6.0391    8.7976    8.2849   26.5751   -3.6802   18.3132    4.8338  -11.7408    5.0799
   0.4260    1.9711   15.2835   10.9495   21.8415    3.6172    4.2102    6.2466  -11.7408   -7.1540
        0   -0.3304         0    0.1295   32.3989  -14.2557    0.2532    4.2791  -11.8426    2.8957
 -12.7325    0.0634         0   14.2557   15.8741  -14.2557  -14.2557   24.2334  -16.0139    2.8957
  -8.6883    7.8212    1.6756   -0.2253   23.7643   -6.8224   13.6659    4.3511    4.8740    8.1959
 
PFIT
  1.0e+03 *
 
   2.0331    1.5445    1.4457    1.7807    2.0042    2.3119    1.4257    2.3674    1.4217    1.4395    1.3583    1.3362    1.3876    1.7433    1.1314    1.6630    1.0934    1.4200    1.8759    1.0474
 
OLDXFIT
  1.0e+04 *
 
   2.2563    2.2563    2.2563    2.2563    2.2563    2.2563    2.2563    2.2563    2.2563    2.2563    2.2563    2.2563    2.2563    2.2563    2.2563    2.2563    2.2563    2.2563    2.2563    2.2563
 
I
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
    1
 
C
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
    0
 
pG
 -47.5000  -47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000  -47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000   47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000   47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000   47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000  -47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000   47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000   47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000   47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000  -47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000   47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000   47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000   47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000   47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000   47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000  -47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
  47.5000  -47.5000   47.5000   47.5000  -47.5000   47.5000   47.5000   47.5000  -47.5000  -47.5000
 -47.5000   47.5000  -47.5000  -47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000   47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 -47.5000  -47.5000  -47.5000  -47.5000  -47.5000  -47.5000   47.5000  -47.5000   47.5000   47.5000
 
G
      X: [-8.6883 7.8212 1.6756 -0.2253 23.7643 -6.8224 13.6659 4.3511 4.8740 8.1959]
   XFIT: 1.0474e+03
 
Iteration: 5000
Solution found
X: [-8.68832      7.82118      1.67559    -0.225312      23.7643     -6.82241      13.6659      4.35113      4.87398      8.19586]
Y: [1047.4187]
 
 
 
*/
