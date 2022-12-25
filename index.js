/* https://www.youtube.com/playlist?list=PLmY2oBouT85a6pqYOxETLm4FqIiTFFczm - Javascript Objects */
console.log('Hello World');

// creating a object in different ways

let obj = {
    age: 10,
    name: 'kiran'
};

console.log(obj, 'General Object creation');

let obj2 = Object.create(obj);

console.log(obj2, 'Object create method');// prototyped

function Add() {
    this.a = 10;
    this.b = 20;
    this.getMessage = function() {
        return 'Hi this is a function';
    }
}

const obj3 = new Add();
console.log(obj3);// Add { a: 10, b: 20, getMessage: [Function (anonymous)] }
console.log(obj3.getMessage());

class Addition {
    a = 10;
    b = 20;
    getMessage() {
        return 'Hi this a another class function';
    }
}

const classObj = new Addition();
console.log(classObj);// Addition { a: 10, b: 20 }
console.log(classObj.getMessage());

const keys = Object.keys(obj);

console.log('Keys of object', keys);// Keys of object [ 'age', 'name' ]

for (let i = 0; i < keys.length; i++) {
    console.log('Key: ', keys[i]);
    console.log('Value: ', obj[keys[i]]);
}

console.log('*** for In loop ****');

// Using for in we can avoid having variable storing Object.keys(obj)
for (const key in obj) {
    console.log('key: ', key);
    console.log('value: ', obj[key]);
}

console.log('*** foreach loop ****');

keys.forEach((key) => {
    console.log('Key: ', key);
    console.log('Value: ', obj[key]);
})

console.log('*** for of loop ****');

for (const iterator of keys) {
    console.log('Key: ', iterator);
    console.log('Value: ', obj[iterator]);
}

let simpleObj = {
    age: 10
}

// Adding the Properties into an objects
simpleObj.name = 'kichu'
simpleObj['address'] = 'hyderabad'
simpleObj['first name'] = 'Kiran Kumar'

const arr = [10,20,30,40];

simpleObj['array'] = arr;

const simpleAnotherObj = {
    telephone: '123-456',
    street: '600082'
}

simpleObj.obj = simpleAnotherObj;

// if property exists in object it will be overridden or not present it will be added to object
Object.defineProperty(simpleObj, 'age', {
    value: 20,
    writable: true // allow to override(optional property), by default false
})

console.log(simpleObj);

let simpleObj2 = {}

Object.defineProperties(simpleObj2, {
    name: {
        value: 'Ram',
        writable: true
    },
    age: {
        value: 30,
        writable: true
    },
    id: {
        value: 03 // non writable property which we cannot override
    }
});

console.log('Multi properties',simpleObj2);

// Enumerable property into define property method
var simpleObj3 = {
    age: 10
}

console.log(Object.keys(simpleObj3));

Object.defineProperty(simpleObj3, 'name', {
    value: 'sai kumar',
    enumerable: true // false by default, set it to true so that it is printed when Object.keys(simpleObj3) is used.
})

console.log(Object.keys(simpleObj3));
console.log('name property check', simpleObj3.propertyIsEnumerable('name'));

// hasOwnProperty method of an object(to check property existence inside an object)
// hasOwnProperty returns false for prototyped properties.
var simpleObj4 = {
    age: 10
}


console.log('check age', simpleObj4.hasOwnProperty('age'));// check age true
console.log('check age', simpleObj4.hasOwnProperty('agee'));// check age false

simpleObj4.name = 'Somu';
console.log('check name', simpleObj4.hasOwnProperty('name'));// check name true

// seal method - I don't want to delete the object properties and don't want to add the new properties into this object, just provide
// access to override the existing properties in this object
var simpleObj5 = {
    age: 10
}

Object.seal(simpleObj5);

simpleObj5.name = 'simple OBject 5';
console.log(simpleObj5);// { age: 10 }

simpleObj5.age = 20;
delete simpleObj5.age;
console.log(simpleObj5);// { age: 20 }

console.log('check whether object is sealed', Object.isSealed(simpleObj5));// check whether object is sealed true

// freeze and isFrozen methods of an object

// if you want to make object to be static, not allowing to modify/add/delete/override properties
var simpleObj6 = {
    age: 10
}

Object.freeze(simpleObj6);

simpleObj6['name'] = 'abc';
simpleObj6.age = 30;
delete simpleObj6.age;

console.log(simpleObj6);// { age: 10 }
console.log('check whether object is frozen', Object.isFrozen(simpleObj6));// check whether object is frozen true

// const vs freeze in objects
const name = '123abc';
console.log(name);

// name = 'abc123'; // not possible assignment to const variable is not allowed

const simpleObj7 = {
    age: 10
}

// we are not modifying/assigning a reference of object, we are modifying the property of an const object and it is possible
simpleObj7.age = 20;

var simpleObj8 = {
    name: 'love'
}

// simpleObj7 = simpleObj8 (this new reference assignment is not possible as simpleObj7 is const)

console.log(simpleObj7);

// Exception Handling | JSON stringify and parse method of an Object
// you will run into error/problem when we are converting string of object to an JS object, not when we are converting JS object to string using stringify

const simpleObj9 = {
    name: 'example9',
    age: 20
}

const stringifyObj = JSON.stringify(simpleObj9);
console.log(stringifyObj);// {"name":"example9","age":20}


console.log(JSON.parse('{"name":"example9","age":20}'));// notice I have passed the stringified object into a string inside JSON.parse

// we should not use single quote inside a single quote and double quote inside a double quote in strings, we can use vice-versa.
const str = '{"name":"example9","age":20';// wanted-ly removed curly braces to make invalid object to throw error while parse

//console.log(JSON.parse(str));// SyntaxError: Unexpected end of JSON input // this will also cause program to stop abruptly and no more lines executed further.

try {
    console.log(JSON.parse(str)); // SyntaxError: Unexpected end of JSON input
} catch (e) {
    console.log(e.message);// Unexpected end of JSON input
    console.log(e);// SyntaxError: Unexpected end of JSON input with stack trace printed
}

console.log('after try catch');

// Object Entries method - purpose of entries

let simpleObj10 = {
    age: 20,
    name: 'simpleObj10'
}

// [[age,20], [name, 'simpleObj10']]

const keys10= Object.keys(simpleObj10);
const values10 = Object.values(simpleObj10);

console.log(keys10);// [ 'age', 'name' ]
console.log(values10);// [ 20, 'simpleObj10' ]

// no. of keys is equal to no. of values - then only we can consider as a valid object. That means single key then single value should be present in object.
const result = [];
for (let i = 0; i< keys10.length; i++) {
    const eachKeyValue = [keys10[i], values10[i]];
    result.push(eachKeyValue);
}

console.log('result', result);// [ [ 'age', 20 ], [ 'name', 'simpleObj10' ] ]

// Easy way of doing above key value pair printing using entries
console.log('entries', Object.entries(simpleObj10));// entries [ [ 'age', 20 ], [ 'name', 'simpleObj10' ] ]

var simpleObj11 = Object.create(simpleObj10);// prototyped - simpleObj10 properties
simpleObj11.address = 'Hyderabad';
console.log(simpleObj11);

console.log('entries', Object.entries(simpleObj11));// entries [ [ 'address', 'Hyderabad' ] ] | prototyped properties will not be considered in entries

// Assign method (merge no. of objects and create a new object(has own properties)) - easy way is using spread operator like var obj4 = {...newObj,...simpleOnj12};
let simpleObj12 = {
    age: 20,
    name: 'simpleObj12'
}

var simpleObj13 = Object.create(simpleObj12);
console.log(simpleObj13);// {} - [[prototype]]

var newObj = {
    address: 'Hyd'
}

var simpleObj14 = Object.assign(simpleObj12);
var simpleObj15 = Object.assign(simpleObj12, newObj);// execution order from right to left(override left content with right content if both object has same property name), assign more than one object
simpleObj15.phone = '81912923';
console.log(simpleObj14);// { age: 20, name: 'simpleObj12' }
console.log(simpleObj15);// { age: 20, name: 'simpleObj12', address: 'Hyd', phone:'81912923' }


// Delete Operator of an Object - deleting a property from an object
// deleting a property from an object which does not exist will not throw an error just ignores the statement.
var simpleObj16 = { name: 'simpleObj16', age: 10}

console.log('Before deleting',simpleObj16);
delete simpleObj16.age;// also works with - delete simpleObj16['age']
console.log('After deleting',simpleObj16);