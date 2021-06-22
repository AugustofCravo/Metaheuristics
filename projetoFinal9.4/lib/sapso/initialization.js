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