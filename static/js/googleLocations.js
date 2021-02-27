// @TODO: YOUR CODE HERE!
let svgHeight = 500;
let svgWidth = 1000;

let margin = {
    top: 20,
    right: 40,
    bottom: 120,
    left: 100
};

let width = svgWidth - margin.right - margin.left;
let height = svgHeight - margin.top - margin.bottom;

let svg = d3.select("#locations-bar-chart")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

let chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

d3.json("../2020_APRIL.json").then(function(locationData, err){
    if (err) throw err;

    //console.log(locationData.timelineObjects)

    let timelineObjects= locationData.timelineObjects

    for (i = 0; i < timelineObjects.length; i++) {
        if (timelineObjects[i]["activitySegment"]) {
            console.log(timelineObjects[i]["activitySegment"]["activityType"])
        }
        else if (timelineObjects[i]["placeVisit"]) {
            console.log(timelineObjects[i]["placeVisit"]["location"]["name"])
        }   
        else {
            console.log("I don't know what this is")
        }
    }
})