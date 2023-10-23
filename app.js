const pointInPolygon = require('point-in-polygon');
const states = require('./data/states.json');
let args = process.argv.slice(2);

const longitude = args[0];
const latitude = args[1];

console.log(`Point entered is: (${longitude}, ${latitude})`);

let json_data = JSON.parse(JSON.stringify(states))
let states_values = Object.values(json_data);
let states_keys = Object.keys(json_data);

states_values.forEach((statePolygon, index) => {
    console.log(`polygon of ${states_keys[index]} is:` )
    console.log(statePolygon)
});
