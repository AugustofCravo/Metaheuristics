function getRow(mat, lin){
  let row = new Array(mat[0].length)
 
  for (let i = 0; i < mat[0].length; i++) {  // devolve linha de matriz
    row[i] = mat[lin][i]
  }
  return row
}