//question1
let characters = ['Harry', 'Hermione', 'Ron', 'Draco', 'Luna'];
for (let i = 1; i <= 5; i++)
    {
    console.log('Ron');
    }
    
//question2
let firstName = 'Harry';
let house = 'Gryffindor';
console.log(`Welcome, ${firstName} of ${house}!`);

//question3
let characterName = 'Hermione';
console.log(characterName.toLowerCase());
console.log(characterName.toUpperCase());

//question 4 
let spell = 'Expelliarmus';
console.log(spell.trim());

//question 5 
let quote = 'I solemnly swear that I am up to no good';
console.log(quote.slice(10, 16));

//question 6 
let firstname = 'Ron';
let lastName = 'Weasley';
console.log(firstname.concat(lastName))

//question 7 
let sentence = 'Draco is a good wizard';
console.log(sentence.replace('good', 'bad'));

//question 8 
let houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw'];
houses.push('Slytherin');
houses.pop();
console.log(houses);

//question 9 
let spells = ['Alohomora', 'Lumos', 'Nox'];
spells.unshift('Accio');
spells.shift();
console.log(spells);

//question 10
let professors = ['Dumbledore', 'McGonagall', 'Snape', 'Hagrid'];
console.log(professors.slice(2, 3));

//question 11
let students = ['Neville', 'Seamus', 'Dean', 'Parvati'];
console.log(students.splice(1, 2));

//question 12
let phrase = ' Mischief Managed ';
console.log(phrase.trim().toLowerCase() + ' - Harry');

//question 13
let wizards = ['Harry', 'Hermione', 'Ron'];
wizards.push('Luna', 'Draco');
console.log(wizards);

//question 14
let message = 'Welcome to Hogwarts School of Witchcraft and Wizardry';
console.log(message.slice(11, 20).concat('Castle'));