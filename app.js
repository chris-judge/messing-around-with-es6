//////////////////////////////////////////////
// Normal
//////////////////////////////////////////////
var createGreeting = function (message, name) {
    return message + ', ' + name;
}
console.log(createGreeting('Hello', 'Normal'));


//////////////////////////////////////////////
// Updated
//////////////////////////////////////////////
var arrowGreeting = (message, name) => {
    return message + ', ' + name;
}
console.log(arrowGreeting('Hello', 'Arrow'));


//////////////////////////////////////////////
// Single line
//////////////////////////////////////////////
var arrowGreetingSingle = (message, name) => message + ', ' + name;
console.log(arrowGreetingSingle('Hello', 'Single'));


//////////////////////////////////////////////
// Single Param
//////////////////////////////////////////////
var arrowGreetingShort = message => 'Hello!';
console.log(arrowGreetingShort());


//////////////////////////////////////////////
// Example (x squared)
//////////////////////////////////////////////
var squared = x => x * x;
console.log(squared(30));


//////////////////////////////////////////////
// Delivery Example (that vs this)
//////////////////////////////////////////////
var deliveryBoy = {
    name: 'John',
    handleMessage: function (message, handler) {
        handler(message);
    },
    recieve: function () {
        this.handleMessage('Hello, ', (message) => {
            console.log(message + this.name);
        });
    }
}
deliveryBoy.recieve();


//////////////////////////////////////////////
// Delivery Example Smaller (that vs this)
//////////////////////////////////////////////
var deliveryBoyShort = {
    name: 'Steve',
    handleMessage: function (message, handler) {
        handler(message);
    },
    recieve: function () {
        this.handleMessage('Hello, ', message => console.log(message + this.name));
    }
}
deliveryBoyShort.recieve();


//////////////////////////////////////////////
// Hi - Bye
//////////////////////////////////////////////
let message = 'hi';
{
    let message = 'bye';
}

console.log(message);


//////////////////////////////////////////////
// let functions
//////////////////////////////////////////////
// ES5
function varFunc() {
    var previous = 0;
    var current = 1;
    var i;
    var temp;

    for (i = 0; i < 10; i += 1) {
        temp = previous;
        previous = current;
        current = temp + current;
    }
}
// ES6
function letFunc() {
    let previous = 0;
    let current = 1;

    for (let i = 0; i < 10; i += 1) {
        let temp = previous;
        previous = current;
        current = temp + current;
    }
}


//////////////////////////////////////////////
// Defaulting nonfunction
//////////////////////////////////////////////
function greet(greeting = "Hello", name = "Chris") {
    console.log(greeting + ', ' + name);
}
greet();
greet('Hi', 'Josh');


//////////////////////////////////////////////
// Defaulting function
//////////////////////////////////////////////
function recieve(complete) {
    complete();
}
recieve(function () {
    console.log('complete');
});

//vs
function recieveNew(completeNew = () => console.log('complete new')) {
    completeNew();
}
recieveNew();

//vs (unadvised)
let recieveSingle = (completeSingle = () => console.log("complete single")) => completeSingle();
recieveSingle();


//////////////////////////////////////////////
// Const
//////////////////////////////////////////////
const VALUE = 'hello world';
// We cannot reassign this
//VALUE = 'foo bar';
console.log('value: ', VALUE);

const VALUETWO = {};
VALUETWO.foo = 'bar';
console.log('Value-Two:', VALUETWO);

//Const adheres to block scope
if(true){
    const foo = 'bar';
    console.log('foo: ',foo);
}
//console.log('foo: ', foo);


//////////////////////////////////////////////
// Shorthand
//////////////////////////////////////////////
let firstName = "Chris";
let lastName = "Judge";
let person = {firstName, lastName};
console.log(person);

let mascot = "Moose";
let team = {person, mascot};
console.log(team);


//////////////////////////////////////////////
// Objects
//////////////////////////////////////////////
var color = "red";
var speed = 10;

var car = {
    color, 
    speed, 
    go(){
        console.log('vroom');
    }
};

console.log(car.color);
console.log(car.speed);
car.go();


//////////////////////////////////////////////
// Spread Operator
//////////////////////////////////////////////
let first = [1,2,3];
let second = [4,5,6];

//first.push(second);
//console.log(first);

//vs
first.push(...second);
console.log(first);

//or

function addThreeThings(a,b,c){
    let result = a + b + c;
    console.log(result);
}

addThreeThings(...first);
addThreeThings(...second);


//////////////////////////////////////////////
// Template Literals
//////////////////////////////////////////////
var salutation = "Hello";
var greeting = `${salutation}, World`;
console.log(greeting);

var x = 1;
var y = 2;
var equation = `${x} + ${y} = ${x + y}`;
console.log(equation);

function tag(strings,...values){
    console.log(strings);
    console.log(values);
    if(values[0] < 20){
        values[1] = 'awake';
    }
    return `${strings[0]}${values[0]}${strings[1]}${values[1]}`;
}
var messageHour = tag`It's ${new Date().getHours()} I'm ${''}`;
console.log(messageHour);


//////////////////////////////////////////////
// Destructuring
//////////////////////////////////////////////
function generateOjb(){
    return{
        color: 'Blue',
        name: 'Chris',
        state: 'Florida',
        position: 'Forward'
    }
}
var {name:first_name,state:location} = generateOjb();
console.log(first_name);
console.log(location);

var [firstColor,secondColor] = ['red','yellow','blue','green','orange'];
console.log(firstColor);
console.log(secondColor); 

var people = [
  {
    "firstName": "Skyler",
    "lastName": "Carroll",
    "phone": "1-429-754-5027",
    "email": "Cras.vehicula.alique@diamProin.ca",
    "address": "P.O. Box 171, 1135 Feugiat St."
  },
  {
    "firstName": "Kylynn",
    "lastName": "Madden",
    "phone": "1-637-627-2810",
    "email": "mollis.Duis@ante.co.uk",
    "address": "993-6353 Aliquet, Street"
  },
]
people.forEach(({firstName})=> console.log(firstName));
