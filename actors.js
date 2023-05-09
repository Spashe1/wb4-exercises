let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
 films: ["A Good Day", "A Better Day"]
 },
 {
 memID: 187,
 name: "Fred Flanders",
 films: ["Who is Fred?", "Where is Fred?",
 "What is Fred?", "Why Fred?"]
 },
 {
 memID: 203,
 name: "Bobbie Boots",
 films: ["Walking Boots", "Hiking Boots",
 "Cowboy Boots"]
 },
];

//To find the academy member whose ID is 187, 
//you can loop through the array and look for 
//the object with a `memID` property of 187:
let memberWithId187 = academyMembers.find(member=> member.memID ===187);
//print
console.log(memberWithId187.name);
//To find out who has been in at least
// 3 films, you can use the `filter` method 
//to create a new array with only the members who meet that criteria:
let membersWithAtLeast3Films = academyMembers.filter(member=> member.films.length>=3);
//print
console.log(membersWithAtLeast3Films.map(member => member.name));

//To find out who has a name that starts
//with "Bob", you can again use the `filter` method 
//with a bit of string manipulation:
let membersWithNameStartingWithBob = academyMembers.filter(member => member.name.startsWith("Bob"));

//print
console.log(membersWithNameStartingWithBob.map(member => member.name));

// To find out which academy members have been 
//in a film that starts with "A", 
//you can use a combination of the `filter` and `some` methods:
let membersInFilmStartingWithA= academyMembers.filter(member=>member.films.some(film => film.startsWith("A")));
//print
console.log(membersInFilmStartingWithA.map(member=>member.name));


