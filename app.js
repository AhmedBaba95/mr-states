const pointInPolygon = require('point-in-polygon');
const states = require('./data/states.json');
let args = process.argv.slice(2);

const longitude = args[0];
const latitude = args[1];

console.log(`Point entered is: (${longitude}, ${latitude})`);

