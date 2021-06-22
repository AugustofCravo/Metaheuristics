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
      
           math.add(math.multiply(I,params.CC,0.8,math.subtract(P,X)),
              
              math.multiply(I,params.SC, 0.7,math.subtract(GB.X1,X)),
                
                  math.multiply(math.subtract(I,1),params.GC,0.6,S)
          )
       )
    )
    return Vtemp
  
}
//console.log(getVelocity(V,V,V,V,GB,I,params,dir,DIM))