/* NOTA: Todos estos ejercicios están hechos con ayuda de chatgpt. El procedimiento a seguir es:
    1. Mandarle el temario completo del punto correspondiente.
    2. Decirle que cuando le pase los ejercicios me guie paso a paso.
    3. Si aún con la guia no lo entiendo pedirle un ejemplo distinto al temario.
    4. Pasarle mi código para que me vaya corrigiendo en el proceso de crearlo.
    */

//1
const numbers = [4, 5, 6, 7, 8, 9, 10];
const elevados = numbers.map (number=> number ** number);
console.log (elevados);

2//
const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];

const foodMessages = foodList.map(food => {
    if (food === 'Pizza') {
        return `Como soy de Italia, amo comer ${food}`
    }else if (food === `Ramen`) {
        return `Como soy de Japón, amo comer ${food}`
    }else if (food === `Paella`) {
        return `Como soy de Valencia, amo comer ${food}`
    }else {
        return `Aunque no como carne, el ${food} es sabroso`
    }
});

//3
const staff = [
  {
    name: 'Pepe',
    role: 'The Boss',
    hobbies: ['leer', 'ver pelis']
  },
  {
    name: 'Ana',
    role: 'becaria',
    hobbies: ['nadar', 'bailar']
  },
  {
    name: 'Luis',
    role: 'programador',
    hobbies: ['dormir', 'comprar']
  },
  {
    name: 'Carlos',
    role: 'secretario',
    hobbies: ['futbol', 'queso']
  } 
];
const staffMessages = staff.map(person => {
      return `${person.name} es ${person.role} y le gusta ${person.hobbies [0]} y ${person.hobbies[1]}`;
    });

//4
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result4 = numbers2.filter (number => number %2 === 1);

//5
const foodList2 =[
{
  name: 'Tempeh',
  isVeggie: true
},
{
  name: 'Cheesbacon burguer',
  isVeggie: false
},
{
  name: 'Tofu burguer',
  isVeggie: true
},
{
  name: 'Entrecot',
  isVeggie: false
}];

const result5 = foodList2
.filter(food => food.isVeggie === true)
.map(food => {
    if (food.name === 'Tempeh') {
      return `Que rico ${food.name} me voy a comer!`;
    } else {
      return `Que rica ${food.name} me voy a comer!`;
    }
  });

//6

const inventory = [
  {
    name: 'Mobile phone',
    price: 199
  },
  {
    name: 'TV Samsung',
    price: 459
  },
  {
    name: 'Viaje a Cancún',
    price: 600
  },
  {
    name: 'Mascarilla',
    price: 1
  }
];

const result6 = inventory
  .filter(item => item.price > 300)
  .map(item => item.name);

//7
const numeros = [39, 2, 4, 25, 62];

function resultado(...numeros) {
  return numeros.reduce((total, numero) => total * numero, 1);
}

console.log(resultado(39, 2, 4, 25, 62));

//8
const sentenceElements = [
  'Me',
  'llamo',
  'Carmen',
  'y',
  'quiero',
  'sentir',
  'la',
  'fuerza',
  'con',
  'javascript'
];

function Resultado(sentenceElements) {
    return sentenceElements.reduce((frase, palabra) => frase + ' ' + palabra);
}

console.log(Resultado(sentenceElements));

//9
const books = [
  {
    name: ' JS for dummies',
    author: 'Emily A. Vander Veer',
    price: 20,
    category: 'code'
  },
  {
    name: 'Don Quijote de la Mancha',
    author: 'Cervantes',
    price: 14,
    category: 'novel'
  },
  {
    name: 'Juego de tronos',
    author: 'George R. Martin',
    price: 32,
    category: 'Fantasy'
  },
  {
    name: 'javascript the good parts',
    author: 'Douglas Crockford',
    price: 40,
    category: 'code'
  }
];

const codeBooks = books.filter(book => book.category === 'code');
const total = codeBooks.reduce((suma, book) => {
    return suma + book.price;
}, 0);
