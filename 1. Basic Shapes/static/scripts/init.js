// Data
var circlesData = [{"x": 10, "y": 10, "r": 10, "c": "red", "w": 0},
    {"x": 40, "y": 40, "r": 20, "c": "green", "w": 3},
    {"x": 90, "y": 90, "r": 30, "c": "blue", "w": 2},
    {"x": 160, "y": 160, "r": 40, "c": "yellow", "w": 4},
    {"x": 248, "y": 248, "r": 50, "c": "gray", "w": 1}];

var rectData = [{"x": 5, "y": 5, "w": 60, "h": 50, "c": "red", "wi": 4},
    {"x": 100, "y": 30, "w": 80, "h": 60, "c": "blue", "wi": 3},
    {"x": 225, "y": 0, "w": 170, "h": 560, "c": "gray", "wi": 0},
    {"x": 15, "y": 130, "w": 150, "h": 150, "c": "yellow", "wi": 1},
    {"x": 440, "y": 20, "w": 150, "h": 200, "c": "green", "wi": 2}];

var linesData = [{"x1": 5, "y1": 5, "x2": 100, "y2": 100, "c": "red", "w": 4},
    {"x1": 300, "y1": 5, "x2": 250, "y2": 500, "c": "gray", "w": 5}];

var curvesData = [{"p": [{"x": 15, "y": 25},
        {"x": 120, "y": 20},
        {"x": 240, "y": 120},
        {"x": 20, "y": 60},
        {"x": 80, "y": 265},
        {"x": 1500, "y": 460}], "c": "blue", "w": 2},
    {"p": [{"x": 15, "y": 460},
        {"x": 120, "y": 265},
        {"x": 240, "y": 120},
        {"x": 20, "y": 60},
        {"x": 80, "y": 50},
        {"x": 1500, "y": 20}], "c": "green", "w": 3}];

var circlesContainer = d3.select("#circlesContainer")
    .append("svg")
    .attr("width", 300)
    .attr("height", 300);
circlesContainer.selectAll("circle")
    .data(circlesData)
    .enter()
    .append("circle")
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; })
    .attr("r", function(d) { return d.r; })
    .style("fill", function(d) { return d.c; })
    .style("stroke", "black")
    .style("stroke-width", function(d) { return d.w; });

var rectContainer = d3.select("#rectContainer")
    .append("svg")
    .attr("width", 600)
    .attr("height", 300);
rectContainer.selectAll("rect")
    .data(rectData)
    .enter()
    .append("rect")
    .attr("x", function(d) { return d.x; })
    .attr("y", function(d) { return d.y; })
    .attr("width", function(d) { return d.w; })
    .attr("height", function(d) { return d.h; })
    .attr("fill", function(d) { return d.c; })
    .style("stroke", "black")
    .style("stroke-width", function(d) { return d.wi; });

var linesContainer = d3.select("#linesContainer")
    .append("svg")
    .attr("width", 400)
    .attr("height", 300);
linesContainer.selectAll("lines")
    .data(linesData)
    .enter()
    .append("line")
    .attr("x1", function(d) { return d.x1; })
    .attr("y1", function(d) { return d.y1; })
    .attr("x2", function(d) { return d.x2; })
    .attr("y2", function(d) { return d.y2; })
    .attr("stroke", function(d) { return d.c; })
    .attr("stroke-width", function(d) { return d.w; });

var lineFunction = d3.line()
    .x(function(d) { return d.x; })
    .y(function(d) { return d.y; })
    .curve(d3.curveBasis);
linesContainer.selectAll("path")
    .data(curvesData)
    .enter()
    .append("path")
    .attr("d", function(d) { return lineFunction(d.p); })
    .attr("stroke", function(d) { return d.c; })
    .attr("stroke-width", function(d) { return d.w; })
    .attr("fill", "none");

var pi = Math.PI;
var arcFunction = d3.arc()
    .innerRadius(150)
    .outerRadius(160)
    .startAngle(100 * pi/180)
    .endAngle(180 * pi/180);
linesContainer.append("path")
    .attr("d", arcFunction)
    .attr("fill", "red")
    .attr("transform", "translate(200, 100)");

var transformContainer = d3.select("#transformContainer")
    .append("svg")
    .attr("width", 800)
    .attr("height", 300);
transformContainer.append("rect")
    .attr("x", 10)
    .attr("y", 30)
    .attr("width", 300)
    .attr("height", 200)
    .attr("fill", "gray")
    .style("stroke", "black")
    .style("stroke-width", 3);

function transform() {

    transformContainer.select("rect")
        .transition()
        .attr("transform", "translate(520, 0) rotate(40) scale(0.75)")
        .attr("fill", "green")
        .duration(1000);
}