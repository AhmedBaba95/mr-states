// Require the 'point-in-polygon' library and load state data from a JSON file.
const pointInPolygon = require('point-in-polygon');
const states = require('./data/states.json');

// Read command-line arguments to get the longitude and latitude of the point.
let args = process.argv.slice(2);
const longitude = args[0];
const latitude = args[1];

// Check the number of arguments.
if (args.length == 0) {
    console.log("Please Enter A Point");
} else if (args.length > 2) {
    console.log("Point invalid");
} else {
    // Display the point entered by the user.
    console.log(`Point entered is: (${longitude}, ${latitude})`);

    // Convert the state data object to arrays for easier iteration.
    let json_data = JSON.parse(JSON.stringify(states));
    let states_values = Object.values(json_data);
    let states_keys = Object.keys(json_data);

    // Loop through and display each state's polygon coordinates.
    states_values.forEach((statePolygon, index) => {
        console.log(`Polygon of ${states_keys[index]} is:`);
        console.log(statePolygon);
    });

    // Initialize a boolean variable to check if the point is inside any state.
    let hasAState = false;

    // Iterate through state polygons and check if the point is inside each one.
    states_values.forEach((statePolygon, index) => {
        let point = [longitude, latitude];

        // Use 'point-in-polygon' library to test if the point is inside the polygon.
        if (pointInPolygon(point, statePolygon)) {
            console.log(`The point entered is in ${states_keys[index]}`);
            hasAState = true;
        }
    });

    // Display a message if the point is not inside any state polygon.
    if (!hasAState) {
        console.log("The Point is not in any polygon");
    }
}

// Example point within the "TIDJIKJA" polygon.
// Point: [ -11.8704, 18.7999 ]
