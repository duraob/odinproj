/* FILTER */

let someList = [1, 2, 3, 4, 5];

const evens = someList.filter(num => (num % 2 == 0));

console.table(evens);

/* MAP */
let eeInfo = [
    {first: "ben", last: "durao", year: "1"},
    {first: "jet", last: "pup", year: "2"},
    {first: "silly", last: "goose", year: "3"}
];

const fullNames = eeInfo.map(name => `${name.first} ${name.last}`);
console.log(fullNames);

/* SORT */
const chronoLine = eeInfo.sort(function(a,b) 
{
    if(a.year > b.year) {
        return 1;
    }
    else
    {
        return -1;
    }
});

console.log(chronoLine);