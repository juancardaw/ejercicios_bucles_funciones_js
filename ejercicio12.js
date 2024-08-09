const mutants = [
    { name: 'Wolverine', power: 'regeneration' },
    { name: 'Magneto', power: 'magnetism' },
    { name: 'Professor X', power: 'telepathy' },
    { name: 'Jean Grey', power: 'telekinesis' },
    { name: 'Rogue', power: 'power absorption' },
    { name: 'Storm', power: 'weather manipulation' },
    { name: 'Mystique', power: 'shape-shifting' },
    { name: 'Beast', power: 'superhuman strength' },
    { name: 'Colossus', power: 'steel skin' },
    { name: 'Nightcrawler', power: 'teleportation' }
  ];
  
  function findMutantByPower(mutants, power) {
   
    for(i = 0; i < mutants.length; i++){
      if(mutants[i].power === power){
        return "Encontrado un mutante o varios con el poder " + power;
      }  
    }
    return "No se ha encontrado ningun mutante con ese poder";
  }

  const resultado = findMutantByPower(mutants, "teleportation");
  console.log(resultado);




  //Encontre una manera de hacerlo con el metodo .filter
/*
  const mutante = mutants.filter((personaje) => personaje.power === power);
  if(mutante.length > 0){
    return "mutante encontrando con poder", power;
  } else {
    return "Mutante no encontrado";
  }
    
  */