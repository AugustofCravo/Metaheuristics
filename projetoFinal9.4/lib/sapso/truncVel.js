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