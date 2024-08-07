const capitals = {
    Spain: 'Madrid',
    France: 'Paris',
    Italy: 'Rome',
    Germany: 'Berlin',
    Portugal: 'Lisbon',
    Poland: 'Warsaw',
    Greece: 'Athens',
    Austria: 'Vienna',
    Hungary: 'Budapest',
    Ireland: 'Dublin'
  };
  
  function getCapital(country) {
  const ciudad = capitals[country];

  if(ciudad){
    const ciudadObj = {
      Pais: country,
      capital: ciudad
    }
    return ciudadObj;
  } else {
    return "El pais no existe"
    } 
  }

  const totalCiudad = getCapital("Greece");
  console.log(totalCiudad);