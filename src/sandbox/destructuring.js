// const person = {
//     name: 'Dean',
//     age: 25,
//     location: {
//         city: 'Timbuktu',
//         temp: 94
//     }
// }

// const {name: namb, age} = person;

// console.log(`${namb} is ${age}.`)

const address = ['202 Electric Ave', 'New York', 'NY', '10203'];

const [ , city, state] = address;

console.log(`Location is ${city}, ${state}`);