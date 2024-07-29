const tracks = [
    { title: 'Enter Sandman', genre: 'Metal' },
    { title: 'Back in Black', genre: 'Rock' },
    { title: 'Bohemian Rhapsody', genre: 'Rock' },
    { title: 'Blinding Lights', genre: 'Pop' },
    { title: 'Old Town Road', genre: 'Country' },
    { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
    { title: 'Bad Guy', genre: 'Pop' },
    { title: 'Thunderstruck', genre: 'Rock' },
    { title: 'Hotel California', genre: 'Rock' },
    { title: 'Stairway to Heaven', genre: 'Rock' }
  ];
  
  // Añade tu código de bucle aquí
  
  const tracksOrdenadas = [];

  const grupoGenero = (tracks) => {const grupoMusica = {};

  for(const {genre, title} of tracks){
    let objGenero = grupoMusica[genre];

    if(!objGenero){
      objGenero = {
        genre,
        tracks: []};
        grupoMusica[genre] = objGenero;
    }
    objGenero.tracks.push(title);
  }
  return grupoMusica;
}
const grupoMusica = grupoGenero(tracks);

console.log(grupoMusica);
