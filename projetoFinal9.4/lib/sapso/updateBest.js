function updateBest(X, XFIT, P, PFIT, G){
  if (XFIT < PFIT){
      P = X
      PFIT = XFIT
      if(XFIT < G.XFIT){         
          G.X1 = X
          G.XFIT = XFIT
      }
  }
  return  [P,PFIT,G]
}
//teste
 
/*
function [P, PFIT, G] = updateBest( X, XFIT, P, PFIT, G )
   if(XFIT < PFIT)
       P = X;
       PFIT = XFIT;
       if(XFIT < G.XFIT)
           G.X = X;
           G.XFIT = XFIT;
       end
   end
end
X = [1,2,3]
P = [2,3,4]
XFIT = 2
PFIT = 3
let G = {
 'X': [1,2,4],      
 'XFIT': 2
}
updateBest(p.X[j], p.XFIT[j], p.P[j], p.PFIT[j], G)
console.log(updateBest(X,XFIT,P,PFIT,G))
*/
//resultado : [1,2,3]     2    G