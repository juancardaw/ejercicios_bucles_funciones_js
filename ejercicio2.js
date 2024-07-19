const movies = [
    { title: 'The Matrix', releaseYear: 1999 },
    { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
    { title: 'Inception', releaseYear: 2010 },
    { title: 'Jurassic Park', releaseYear: 1993 },
    { title: 'The Shawshank Redemption', releaseYear: 1994 },
    { title: 'Pulp Fiction', releaseYear: 1994 },
    { title: 'Avatar', releaseYear: 2009 },
    { title: 'The Dark Knight', releaseYear: 2008 },
    { title: 'Fight Club', releaseYear: 1999 },
    { title: 'Forrest Gump', releaseYear: 1994 }
  ];
  
  const pelisAnt = [];
  const pelisDes = [];

  for(const peliculas of movies){
    if(peliculas.releaseYear < 2000){
        pelisAnt.push(peliculas);
    } else {
        pelisDes.push(peliculas);
    }
  }
  
  console.log("Las peliculas mas antiguas antes del 2000 son: ", pelisAnt);
  console.log("Las peliculas depsues de los 2000 son: ", pelisDes);