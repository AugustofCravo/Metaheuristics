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