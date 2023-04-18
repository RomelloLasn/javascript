// variables

const myName = "Romello Lasn" //string
let myAge = 16 //number
const myChildren = ["Gen, Andrus"]; // array
const canRideBycicle = false; //boolean
const person = {
    myName: "Romello Lasn",
    myAge: 65,


}; // Object

console.log(myName, myAge);
console.log(myChildren[0]);
console.log(canRideBycicle);
console.log(person)

// VARIABLE SCOPES

// objects

const car =  {
    mark : "Land Rover",
    model: "Range Rover",
    transmission: "automatic",
    type: "truck",
}

const subCar = ["Land Rover", "Rnage Rover", "automatic", "truck"];


console.log(car.color.blue);

const numbers = [1, 2, 3, 4, 5, 6]
const birthdayDay = "32";
const birthdayMonth = "december";

console.log (typeof birthdayDay)
console.log (new Date("04.18.2023"))
console.log (Math.random())
console.log(typeof Number())

// Adding to object
car.motor = "200kw"

// type casting

// basic operators

/**
 * = on väärtuse andmine muutujale
 * == väärtuse on võrdsed mõlemal poolel ("32" == 32)
 * === väärtused ja andme tüübid on võrdsed 
 * + liitmine (ühekaupa liitmise operaator ++ => 1 ++)
 * - lahutamine
 * / jagamine
 * * korrutamine
 * % (remainder) jääk
 * ** astendamine
 * ! ei ole võrdne
 * !== väärtused ning andmetüübid ei ole võrdsed
 */ 

// Data structures - Map vs Set

const contacts = new Map();

contacts.set("Jessie", {phone: "5554555", aadress: "Ametikool"});
contacts.has("Jessie");
contacts.get("Jessie");
contacts.get("Audi", {model: "58"})
console.log(contact.size)
contacts.delete("Audi");

const mySet = new Set();
mySet.add(1);
mySet.add({a: 1, b: 2});
mySet.add(true);

// JSON - Javascript Object Notation

const thisIsJSON = {
    "name": "Romello Lasn",
    "age": 234,
}

// if statements and shorthand exprele 
let year = prompt("kui vana sa oled?");
if(year === 2131) {

alert("õige vastus, tubli!");
} else if (year === "32334") {
alert("vale vastus, proovi uuesti");
}
else {
    alert("puhta mööda")
}

!year === ("1756") ? alert("pihtas, põhjas") : alert("mööööööödas")



