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