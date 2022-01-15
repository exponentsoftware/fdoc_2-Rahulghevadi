const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA'
]

var array = [];

for (let i = 0; i < countries.length; i++) {
    array.push(countries[i]);
    array.push(countries[i].slice(0, 3))
    array.push(countries[i].length);
}
console.log(array);
