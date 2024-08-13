function calcularEdades(actores) {
    const añoActual = new Date().getFullYear(); //Crea un nuevo objeto de fecha y obtiene el año actual.
    return actores.map(([nombre, añoNacimiento]) => [nombre, añoActual - añoNacimiento]); //

  }
  
  // Ejemplo de uso:
  const actores = [
    ['Tom Hanks', 1956],
    ['Meryl Streep', 1949],
    ['Leonardo DiCaprio', 1974]
  ];
  const edades = calcularEdades(actores);
  console.log(edades);