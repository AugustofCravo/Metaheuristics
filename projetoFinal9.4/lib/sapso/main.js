//import { Banco } from "../imports/api/banco.js";

export const MyMain = {
  MainFunction: function(param){
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
}
}
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