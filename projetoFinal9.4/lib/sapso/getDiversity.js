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