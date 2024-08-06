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
    const paisCapital = {
      Pais: country,
      Capital: ciudad,
    }
    return paisCapital; 
  }else {
    return "No existe este pais en la lista"
  }
}

const capitalFinal = getCapital("France");
console.log(capitalFinal);