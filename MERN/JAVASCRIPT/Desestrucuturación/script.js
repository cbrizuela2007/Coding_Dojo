//********PROBLEMA 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) 
console.log(otherRandomCar) 

//RESULTADO PROBLEMA 1
// IMPRIME TESLA
//IMPRIME MERCEDES


//******PROBLEMA 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);

//RESULTADO PROBLEMA 2
// DA ERROR PARA LA CONSTANTE NAME, YA QUE EL VALOR DE DICHA CLAVE SE ESTÁ ASIGNANDO A LA CONSTANTE otherName
// SI SE ELIMINA EL PRIMER CONSOLE.LOG FUNCIONA Y SE IMPRIME ELON PARA LA SIGUIENTE LÍNEA

//*******PROBLEMA 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

//RESULTADO PROBLEMA 3
// imprime 12345 en la primera línea
//imprime undefined en la segunda ya que no coincide con ninguna clave del objeto

//******PROBLEMA 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

//RESULTADO PROBLEMA 4
//imprime false
//imprime true

//PROBLEMA 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

//RESULTADO PROBLEMA 5
//imprime value
//imprime [1, 5, 1, 8, 3, 3]
//imprime 1
//imprime 5



