

const pelicula = {
    title: "El Padrino",
    releaseYear: 2023
  };


/*
// Explicacion de la funcion "decada"
const decada = (pelicula) => Math.floor(pelicula.releaseYear / 10) * 10 ;

// La primera linea define una funcion llamada "decada" que toma como argumento llamado "pelicula". En este caso el argumento "pelicula" se espera que sea un objeto que represente una pelicula. ("const decada = (pelicula) => {}")

//En el siguiente paso se realiza el calculo de la decada en la que se estreno la pelicula. ("Math.floor(pelicula.releaseYear / 10) *10 ")

//La expresion "pelicula.releaseYear / 10" divide el año de estreno "pelicula.releaseYear" por 10. Esto nos daria el numero de la decada (por ejemplo: 202 para el año 2023)

//Luego, para hacer el redondeo hacia abajo, la funcion math.floor() redondea el resultado de la division havia abajo. Esto nos asegura que obtengamos un numero entero que represente la decada complemta. (por ejemplo, 202 se convierte en 200)

//Multiplicacion por 10: La expresion *10 multiplica el sedultado del redondeo por 10. Esto nos da la decada completa (ejemplo, 200 se covierte en 2020)



Explicacion de el bucle  

for(const pelicula of starWarsMovies){
const año = decada(pelicula);

//Aqui, dentro del bucle, lo que hacemos es llamada a la funcion "decada" (que es la que esta explicada arriba) para obtener la decada en la que se estreno la pelicula actual (pelicula), y este resultado se almacena en la variable "año" ("const año = decada(pelicula)")



Explicacion de:
let decadaCompleta = peliculasOrdenadas.find((decaObj) => decaObj.decada === año);

//La línea de código "let decadaCompleta = peliculasOrdenadas.find((decaObj) => decaObj.decada === año);"" utiliza el método find() de un array llamado "peliculasOrdenadas" (Que este es el array vacio para almacenar nuestro resultado final) para encontrar y almacenar un objeto que coincida con una condición específica. La variable decadaCompleta almacena el objeto encontrado.

//("let decadaCompleta = ") es la variable que se utilizara para almacenar el objeto que se encuentre en el array "peliculasOrdenadas".

//("peliculasOrdenadas.find((decaObj) => decaObj.decada === año)") en esta parte de la expresion asigna a la variable "decadaCompleta" el resultado de llamar al metodo .find() sobre el array "peliculasOrdenadas". El metodo find() toma un argumento que es una funcion de callback. La funcuin de callback se ejecuta para cada elemento del array, y el metodo ".find()" devuelve el primer elemento para el cual la funcion de callback devuelve "true".

//("(decaObj) => decaOjb.decada === año") esta es la funcion callback. Esta funcion toma un argumento llamado decaObj. Este argumento representa cada elemento del array "peliculasOrdenadas" a medida que se recorre el array. Dentro de la funcion de Callback, se realiza una comparacion entre la propiedad "decada" del objeto "decaObj" y el valor de la variable "año". Si la propiedad "decada" es igual al valor de "año", la funcion de callaback devuelve "true". En caso contrario devuelve "false".



if(!decadaCompleta){
    decadaCompleta = {
        decada: año,
        peliculas: [],
    };

IF(!decadaCompleta)

//La instrucción if(!decadaCompleta) verifica si la variable decadaCompleta está vacía o tiene el valor undefined. Si se cumple esta condición, se ejecuta el código dentro del bloque if, el cual típicamente se encargaría de manejar el caso en el que no se haya encontrado ninguna película coincidente.


decadaCompleta = {
  decada: año,
  peliculas: [],
};

//Si la condicion del "If" se cumple, esta nos genera dos nuevos objetos con la propiedad "decada", que almacena el valor "año". Y la propiedad "peliculas", que esta contiene un array vacio  y se utilizara para almadenar las peliculas a la decada especificada. 

//Esto lo que har aal final del codigo, sera asignar el objeto nuevo con las propiedades "decada" y "pelicula", a la varibale "decadaCompleta"

//En resumen, el código dentro del bloque if crea un nuevo objeto que representa una década y lo almacena en la variable decadaCompleta si esta última está vacía o tiene el valor undefined. Este nuevo objeto tiene propiedades para almacenar la década en sí y las películas asociadas a ella.

//Este código se ejecuta únicamente en el caso de que no se haya encontrado ninguna película en el array peliculasOrdenadas que coincida con la década especificada en la variable año. Esto significa que el código crea una nueva entrada en la estructura de datos para almacenar la información de la década y las películas que se encuentren posteriormente.


*/