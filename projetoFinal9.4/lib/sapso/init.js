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