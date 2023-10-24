const pointInPolygon = require('point-in-polygon');
const states = require('./data/states.json');
let args = process.argv.slice(2);

const longitude = args[0];
const latitude = args[1];

if(args.length == 0){
    console.log("Please Enter A Point") 
}else if(args.length > 2) {
    console.log("Point invalid")
} else {
    console.log(`Point entered is: (${longitude}, ${latitude})`);

    let json_data = JSON.parse(JSON.stringify(states))
    let states_values = Object.values(json_data);
    let states_keys = Object.keys(json_data);

    states_values.forEach((statePolygon, index) => {
    
        console.log(`polygon of ${states_keys[index]} is:` )
        console.log(statePolygon)

    });

    let hasAState = false

    states_values.forEach((statePolygon, index) => {

        let point = [longitude,latitude]
        if(pointInPolygon(point, statePolygon)) {
            console.log(`The point entered is in ${states_keys[index]}`)
            hasAState = true
        }

    });

    if(!hasAState) {
        console.log("The Point is not in any polygon")
    }
}

