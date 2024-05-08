const logExHeading = (num) => {
    let slashes = '//'
    let equals = ' ' + '='.repeat(20) + ' '
    console.log((slashes + equals + 'Ex ' + String(num) + equals + slashes), '\n')
}

console.clear()

// ================== EX 1 ====================== //
// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63]

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here
const numsTimes2 = nums.map( (currentIndex) => {
    return currentIndex * 2
})

logExHeading(1)
console.log(numsTimes2, '\n')

// ================== EX 2 ====================== //
// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies']

// Your code here
const [ topping1, topping2 ] = pizzaToppings

logExHeading(2)
console.log('First Topping:', topping1, '\nSecond Topping:', topping2, '\n')

// ================== EX 3 ====================== //
// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
}

// Your code here
const { make, model } = car

logExHeading(3)
console.log('Make:', make, '\nModel:', model, '\n')

// ================== EX 4 ====================== //
// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

// This line is already on line 27
// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies']

// Your code here
const controversialPizzaToppings = [...pizzaToppings]

logExHeading(4)
console.log('controversialPizzaToppings:', controversialPizzaToppings, '\n')

// ================== EX 5 ====================== //
// Duplicate the following object and spread its values into a new variable `myCar`.

// These lines are already on lines 38-41
// const car = {
//     make: 'Audi',
//     model: 'q5',
// }

// Change the `model` property of `myCar` to 'q7'. Log both objects.

// Your code here
const myCar = { ...car }
myCar.model = 'q7'

logExHeading(5)
console.log('car:', car, '\nmyCar:', myCar, '\n')

// ================== EX 6 ====================== //
// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here
const propertyName = 'age'
const userProfile = {
    [propertyName]: 29
}

logExHeading(6)
console.log('userProfile:', userProfile, '\n')

// ================== EX 7 ====================== //
import { ex7 } from './importingFile.js'

logExHeading(7)
ex7()

// ================== EX 8 ====================== //
// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here
const logSentence = (noun = 'cat', adjective = 'white') => {
    console.log(`The ${noun} is ${adjective}.\n`)
}

logExHeading(8)
logSentence()

// ================== EX 9 ====================== //
// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty'

// if (pizza === 'tasty') {
//   console.log('yum');
// } else {
//   console.log('yuck');
// }

logExHeading(9)

// Your code here
console.log( pizza === 'tasty' ? 'yum' : 'yuck')
console.log()

// ================== EX 10 ===================== //
logExHeading(10)
// Simulated language configuration (change this variable to test)
const localLangConfig = null // Change to 'es', 'fr', etc., or keep it null

// Create a variable called LANG
// Assign LANG the value of localLangConfig or 'en' as a default

// Your code here
const LANG = localLangConfig || 'en'

// Log the result
console.log('Language setting:', LANG)

// Simulated user theme preference (change this variable to test)
const userSavedTheme = null // Change to 'dark', 'contrast', etc., or keep it null

// Create a variable called USER_THEME
// Assign USER_THEME the value of userSavedTheme or 'light' as a default

// Your code here
const USER_THEME = userSavedTheme || 'light'

// Log the result
console.log('User theme setting:', USER_THEME)
console.log()

// ================== EX 11 ===================== //
// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
    name: 'Alice',
}

let cat = adventurer.cat?.age // Your code here

logExHeading(11)
console.log('Cat:', cat, '\n')
