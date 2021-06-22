//Arquivo com as funções em Js

import { Banco } from "../imports/api/banco.js";
import  math from "mathjs";
import {sphere} from "./sapso/multdim/sphere.js";

export const MyFunctions = {
	//funcão para criar um alert com a string inserida pelo usuário
	MyFunction: function(param) {
		alert(param);
		Banco.insert(param);
		console.log("inserindo no banco");
	},
	//função para somas dois número inseridos pelo usuário e imprimir o resultado no 
	//console. Ainda não consegui mostrar o resultado na página cliente.
	myTeste: function(param, param2) {
		var soma;
		soma = param + param2;
		console.log(soma);
	},
	
	teste1: function(param){

function initialization(n ,d, r){


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
        
            math.add(math.multiply(I,params.CC,math.random(),math.subtract(P,X)),
                
               math.multiply(I,params.SC, math.random(),math.subtract(GB.X1,X)),
                  
                   math.multiply(math.subtract(I,1),params.GC,math.random(),S)
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
let MAXITER = 50                                            // max number of iterations
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
	},
	
	
	//Função para inserir dados no Banco de dados (exemplo da internet)
	//Só funciona se o ALLOW estiver ativo.
	saveNewItem: function() {
			Meteor.call("createItem", this.bd, function(error, result) {
				if(error) {
					console.error("Alguma coisa está errada", error);
				} else {
					console.info(result);
				}
		});
	},
	
	//Função para inserir dados no Banco de dados (retirada do nosso primeiro exemplo)
	// só funciona com a funcão ALLOW ativada no servidor.
	addNewTodo: function(){
			let newTodo = {
				name: this.name,
				date: new Date(),
				completed: false
			};

			Banco.insert(newTodo);
			console.log("inserindo no banco");
			
	}



};