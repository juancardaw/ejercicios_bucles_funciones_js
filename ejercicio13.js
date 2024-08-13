const actors = [
    { name: 'Leonardo DiCaprio', born: 1974 },
    { name: 'Tom Hanks', born: 1956 },
    { name: 'Meryl Streep', born: 1949 },
    { name: 'Brad Pitt', born: 1963 },
    { name: 'Johnny Depp', born: 1963 },
    { name: 'Scarlett Johansson', born: 1984 },
    { name: 'Jennifer Lawrence', born: 1990 },
    { name: 'Denzel Washington', born: 1954 },
    { name: 'Morgan Freeman', born: 1937 },
    { name: 'Cate Blanchett', born: 1969 }
  ];
  
  function calculateActorsAges(actors) {
    
    const fechaActual = new Date();
    const resultadoTotal = []

    for(const actores of actors){
    const fechaNacimiento = actores.born;
    const añosTotal = fechaActual.getFullYear() - fechaNacimiento;
    const totalActores = {
      name: actores.name,
      born: añosTotal
    }
    resultadoTotal.push(totalActores);
    }
    console.log(resultadoTotal);
  }
  const resultado = calculateActorsAges(actors);
  console.log(resultado)
