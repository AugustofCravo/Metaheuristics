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
