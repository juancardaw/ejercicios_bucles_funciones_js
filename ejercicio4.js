const cartoons = [
    { name: 'Mickey Mouse', debut: 1928 },
    { name: 'Bugs Bunny', debut: 1938 },
    { name: 'SpongeBob SquarePants', debut: 1999 },
    { name: 'Tom and Jerry', debut: 1910 },
    { name: 'Scooby-Doo', debut: 1969 },
    { name: 'The Flintstones', debut: 1960 },
    { name: 'Batman: The Animated Series', debut: 1992 },
    { name: 'The Simpsons', debut: 1989 },
    { name: 'Pokémon', debut: 1997 },
    { name: "Dexter's Laboratory", debut: 1996 }
  ];
  
  
  let peliAnt = "";

  for(const pelicula of cartoons){
   
    if(!peliAnt || peliAnt.debut > pelicula.debut){
        peliAnt = pelicula;
    }
  }
  
  console.log(peliAnt)




//Esta seria una manera de ordenar la lista de manera cronologica con el metodo sort(), ademas que es una funcion flecha
  cartoons.sort((a, b)=>(a.debut - b.debut));
  console.log(cartoons.sort())

