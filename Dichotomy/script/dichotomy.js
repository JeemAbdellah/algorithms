function racine(n,x)
  {
      var a;
      var low, med, high;
      var resultat = 1 ;
      
      low = 0;
      high = x;
      
      while(x != resultat){
          resultat = 1;
          med = (high+low)/2;
          for(var i=0 ; i<n ; i++)
          {
              resultat = resultat * med;    
          }

        if(resultat>x){
            high = med;
        }else if(resultat<x){
            low = med
        }
        resultat = parseFloat(resultat).toPrecision(12);
    }
    a = med;
    return a;
}