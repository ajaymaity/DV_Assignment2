var city = [{"lon": 24, "lat": 55, "city": "Kowno"},
    {"lon": 25.3, "lat": 54.7, "city": "Wilna"},
    {"lon": 26.4, "lat": 54.4, "city": "Smorgoni"},
    {"lon": 26.8, "lat": 54.3, "city": "Molodexno"},
    {"lon": 27.7, "lat": 55.2, "city": "Gloubokoe"},
    {"lon": 27.6, "lat": 53.9, "city": "Minsk"},
    {"lon": 28.5, "lat": 54.3, "city": "Studienska"},
    {"lon": 28.7, "lat": 55.5, "city": "Polotzk"},
    {"lon": 29.2, "lat": 54.4, "city": "Bobr"},
    {"lon": 30.2, "lat": 55.3, "city": "Witebsk"},
    {"lon": 30.4, "lat": 54.5, "city": "Orscha"},
    {"lon": 30.4, "lat": 53.9, "city": "Mohilow"},
    {"lon": 32, "lat": 54.8, "city": "Smolensk"},
    {"lon": 33.2, "lat": 54.9, "city": "Dorogobouge"},
    {"lon": 34.3, "lat": 55.2, "city": "Wixma"},
    {"lon": 34.4, "lat": 55.5, "city": "Chjat"},
    {"lon": 36, "lat": 55.5, "city": "Mojaisk"},
    {"lon": 37.6, "lat": 55.8, "city": "Moscou"},
    {"lon": 36.6, "lat": 55.3, "city": "Tarantino"},
    {"lon": 36.5, "lat": 55, "city": "Malo-jarosewli"}];

var temp = [{"lon": 37.6, "tmp": 0, "days": 6, "mon": "Oct", "day": 18},
    {"lon": 36, "tmp": 0, "days": 6, "mon": "Oct", "day": 24},
    {"lon": 33.2, "tmp": -9, "days": 16, "mon": "Nov", "day": 9},
    {"lon": 32, "tmp": -21, "days": 5, "mon": "Nov", "day": 14},
    {"lon": 29.2, "tmp": -11, "days": 10},
    {"lon": 28.5, "tmp": -20, "days": 4, "mon": "Nov", "day": 28},
    {"lon": 27.2, "tmp": -24, "days": 3, "mon": "Dec", "day": 1},
    {"lon": 26.7, "tmp": -30, "days": 5, "mon": "Dec", "day": 6},
    {"lon": 25.3, "tmp": -26, "days": 1, "mon": "Dec", "day": 7}];

var army = [{"lon": 24, "lat": 54.9, "surv": 340000, "dir": "A", "div": 1},
    {"lon": 24.5, "lat": 55, "surv": 340000, "dir": "A", "div": 1},
    {"lon": 25.5, "lat": 54.5, "surv": 340000, "dir": "A", "div": 1},
    {"lon": 26, "lat": 54.7, "surv": 320000, "dir": "A", "div": 1},
    {"lon": 27, "lat": 54.8, "surv": 300000, "dir": "A", "div": 1},
    {"lon": 28, "lat": 54.9, "surv": 280000, "dir": "A", "div": 1},
    {"lon": 28.5, "lat": 55, "surv": 240000, "dir": "A", "div": 1},
    {"lon": 29, "lat": 55.1, "surv": 210000, "dir": "A", "div": 1},
    {"lon": 30, "lat": 55.2, "surv": 180000, "dir": "A", "div": 1},
    {"lon": 30.3, "lat": 55.3, "surv": 175000, "dir": "A", "div": 1},
    {"lon": 32, "lat": 54.8, "surv": 145000, "dir": "A", "div": 1},
    {"lon": 33.2, "lat": 54.9, "surv": 140000, "dir": "A", "div": 1},
    {"lon": 34.4, "lat": 55.5, "surv": 127100, "dir": "A", "div": 1},
    {"lon": 35.5, "lat": 55.4, "surv": 100000, "dir": "A", "div": 1},
    {"lon": 36, "lat": 55.5, "surv": 100000, "dir": "A", "div": 1},
    {"lon": 37.6, "lat": 55.8, "surv": 100000, "dir": "R", "div": 1},
    {"lon": 37.5, "lat": 55.7, "surv": 98000, "dir": "R", "div": 1},
    {"lon": 37, "lat": 55, "surv": 97000, "dir": "R", "div": 1},
    {"lon": 36.8, "lat": 55, "surv": 96000, "dir": "R", "div": 1},
    {"lon": 35.4, "lat": 55.3, "surv": 87000, "dir": "R", "div": 1},
    {"lon": 34.3, "lat": 55.2, "surv": 55000, "dir": "R", "div": 1},
    {"lon": 33.3, "lat": 54.8, "surv": 37000, "dir": "R", "div": 1},
    {"lon": 32, "lat": 54.6, "surv": 24000, "dir": "R", "div": 1},
    {"lon": 30.4, "lat": 54.4, "surv": 20000, "dir": "R", "div": 1},
    {"lon": 29.2, "lat": 54.4, "surv": 20000, "dir": "R", "div": 1},
    {"lon": 28.5, "lat": 54.3, "surv": 20000, "dir": "R", "div": 1},
    {"lon": 28.3, "lat": 54.4, "surv": 20000, "dir": "R", "div": 1},
    {"lon": 24, "lat": 55.1, "surv": 60000, "dir": "A", "div": 2},
    {"lon": 24.5, "lat": 55.2, "surv": 60000, "dir": "A", "div": 2},
    {"lon": 25.5, "lat": 54.7, "surv": 60000, "dir": "A", "div": 2},
    {"lon": 26.6, "lat": 55.7, "surv": 40000, "dir": "A", "div": 2},
    {"lon": 27.4, "lat": 55.6, "surv": 33000, "dir": "A", "div": 2},
    {"lon": 28.7, "lat": 55.5, "surv": 30000, "dir": "R", "div": 2},
    {"lon": 29.2, "lat": 54.3, "surv": 30000, "dir": "R", "div": 2},
    {"lon": 28.5, "lat": 54.2, "surv": 30000, "dir": "R", "div": 2},
    {"lon": 28.3, "lat": 54.3, "surv": 28000, "dir": "R", "div": 2},
    {"lon": 27.5, "lat": 54.5, "surv": 20000, "dir": "R", "div": 2},
    {"lon": 26.8, "lat": 54.3, "surv": 12000, "dir": "R", "div": 2},
    {"lon": 26.4, "lat": 54.4, "surv": 14000, "dir": "R", "div": 2},
    {"lon": 24.6, "lat": 54.5, "surv": 8000, "dir": "R", "div": 2},
    {"lon": 24.4, "lat": 54.4, "surv": 4000, "dir": "R", "div": 2},
    {"lon": 24.2, "lat": 54.4, "surv": 4000, "dir": "R", "div": 2},
    {"lon": 24.1, "lat": 54.3, "surv": 4000, "dir": "R", "div": 2},
    {"lon": 24, "lat": 55.2, "surv": 22000, "dir": "A", "div": 3},
    {"lon": 24.5, "lat": 55.3, "surv": 22000, "dir": "A", "div": 3},
    {"lon": 24.6, "lat": 55.8, "surv": 6000, "dir": "R", "div": 3},
    {"lon": 24.2, "lat": 54.4, "surv": 6000, "dir": "R", "div": 3},
    {"lon": 24.1, "lat": 54.3, "surv": 6000, "dir": "R", "div": 3}];

// screen dimensions
var width = 1520,
    height = 714;

// set projection
var projection = d3.geo.mercator()
    .scale(4000)
    .translate([-1200, 4900]);

// create path variable
var path = d3.geo.path()
    .projection(projection);

// create svg variable
var svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("background", "#C1E1EC");

// create grouped variable for map
var g = svg.append("g");

d3.json("../../data/europe.json", function(error, topology) {

    if (error) return console.log(error);

    // create map
    g.selectAll("path.countries")
        .data(topojson.feature(topology, topology.objects.europe).features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("class", "countries");

    //Define and set up the tooltip
    var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {

        return "Latitude: " + d.lat + "<br/>" +
            "Longitude: " + d.lon + "<br/>" +
            "Survivors: " + d.surv + "<br/>" +
            "Direction: " + (d.dir == "A" ? "Attack" : "Return") + "<br/>" +
            "Division: " + d.div;
    });
    svg.call(tip);

    var tempRef = 53.5,
        tempScale = 20;
    // find the largest/smallest longitude/latitude from temp data
    var maxLon = -1000,
        minLon = 1000,
        maxLat = -1000,
        minLat = 1000;
    temp.forEach(function(d, i) {

        if (i == 0) prevd = d;
        if (d.lon > maxLon) maxLon = d.lon;
        else minLon = d.lon;
        
        lat = tempRef + d.tmp / tempScale;
        if (lat > maxLat) maxLat = lat;
        else minLat = lat;
    });

    // dashed vertical lines
    svg.selectAll("line.dashVertLine")
        .data(temp)
        .enter()
        .append("line")
        .attr("x1", function(d) { return projection([d.lon, 51.5])[0]; })
        .attr("y1", function(d) { return projection([d.lon, 51.5])[1]; })
        .attr("x2", function(d) { return projection([d.lon, 56])[0]; })
        .attr("y2", function(d) { return projection([d.lon, 56])[1]; })
        .attr("stroke", "white")
        .attr("stroke-width", 2)
        .style("stroke-dasharray", "5,5")
        .style("opacity", 0.2)
        .attr("class", "dashVertLine");

    // dashed horizontal lines
    svg.selectAll("line.dashHorLine")
        .data(temp)
        .enter()
        .append("line")
        .attr("x1", function(d) { return projection([minLon, tempRef + d.tmp / tempScale])[0] - 50; })
        .attr("y1", function(d) { return projection([minLon, tempRef + d.tmp / tempScale])[1]; })
        .attr("x2", function(d) { return projection([maxLon, tempRef + d.tmp / tempScale])[0] + 20; })
        .attr("y2", function(d) { return projection([maxLon, tempRef + d.tmp / tempScale])[1]; })
        .attr("stroke", "white")
        .attr("stroke-width", 2)
        .style("stroke-dasharray", "5,5")
        .style("opacity", 0.2)
        .attr("class", "dashHorLine");

    // Line chart for temperature
    var tempTrail = d3.layout.trail()
        .positioner(function(d) { return [d.lon, tempRef + d.tmp / tempScale]; })
        .coordType('coordinates')
        .data(temp)
        .layout();
    svg.selectAll("line.temp")
        .data(tempTrail)
        .enter()
        .append("path")
        .style("stroke-width", 3)
        .style("stroke", "white")
        .style("opacity", 0.75)
        .attr("d", path)
        .attr("class", "temp");

    // x-axis for temperature line chart
    svg.append("line")
        .attr("x1", projection([minLon, minLat])[0] - 50)
        .attr("y1", projection([minLon, minLat])[1] + 30)
        .attr("x2", projection([maxLon, minLat])[0] + 20)
        .attr("y2", projection([maxLon, minLat])[1] + 30)
        .attr("stroke", "white")
        .attr("stroke-width", 2)
        .attr("class", "xAxis");

    // x-axis label for temperature line chart
    svg.selectAll("text.xAxisLabel")
        .data(temp)
        .enter()
        .append("text")
        .attr("x", function(d) { return projection([d.lon, minLat - 0.5])[0] - 19; })
        .attr("y", function(d) { return projection([d.lon, minLat - 0.5])[1] - 10; })
        .text(function(d) { 
            
            if (d.day == undefined) return ""
            else return d.day + " " + d.mon;
        })
        .style("fill", "white")
        .attr("class", "xAxisLabel");

    // y-axis for temperature line chart
    svg.append("line")
        .attr("x1", projection([maxLon, minLat])[0])
        .attr("y1", projection([maxLon, minLat])[1] + 50)
        .attr("x2", projection([maxLon, maxLat])[0])
        .attr("y2", projection([maxLon, maxLat])[1] - 50)
        .attr("stroke", "white")
        .attr("stroke-width", 2)
        .attr("class", "yAxis");

    // circles on temperature line chart
    svg.selectAll("circle.tempPoints")
        .data(temp)
        .enter()
        .append("circle")
        .attr("cx", function(d) { return projection([d.lon, tempRef + d.tmp / tempScale])[0]})
        .attr("cy", function(d) { return projection([d.lon, tempRef + d.tmp / tempScale])[1]})
        .attr("r", 2)
        .style("fill", "white")
        .style("stroke", "white")
        .style("stroke-width", 3)
        .attr("class", "tempPoints");

    // temperature label
    svg.selectAll("text.tempLabel")
        .data(temp)
        .enter()
        .append("text")
        .attr("x", function(d) { return projection([d.lon, tempRef + d.tmp / tempScale])[0] - 12.5; })
        .attr("y", function(d) { return projection([d.lon, tempRef + d.tmp / tempScale])[1] - 10; })
        .text(function(d) { return d.tmp; })
        .style("fill", "white")
        .attr("class", "tempLabel");

    svg.selectAll("circle.cities")
        .data(city)
        .enter()
        .append("circle")
        .attr("cx", function(d) { return projection([d.lon, d.lat])[0]; })
        .attr("cy", function(d) { return projection([d.lon, d.lat])[1]; })
        .attr("r", "2px")
        .attr("fill", "white")
        .attr("class", "cities");

    var trail = d3.layout.trail()
        .positioner(function(d) { return [d.lon, d.lat]; })
        .coordType('coordinates')
    
    var trailLayoutDiv1 = trail
        .data(army.filter(function(d) { return d.div == 1; }))
        .layout();

    svg.selectAll("line.div1")
        .data(trailLayoutDiv1)
        .enter()
        .append("path")
        .style("stroke-width", function(d) { return d.surv/10000; })
        .style("stroke", "yellow")
        .style("opacity", function(d) {

            if (d.dir == "A") return 0.3;
            else return 1.0;
        })
        .attr("d", path)
        .attr("class", "div1");

    var trailLayoutDiv2 = trail
        .data(army.filter(function(d) { return d.div == 2; }))
        .layout();
    svg.selectAll("line.div2")
        .data(trailLayoutDiv2)
        .enter()
        .append("path")
        .style("stroke-width", function(d) { return d.surv/10000; })
        .style("stroke", "orange")
        .style("opacity", function(d) {

            if (d.dir == "A") return 0.3;
            else return 1.0;
        })
        .attr("d", path)
        .attr("class", "div2");
    
    var trailLayoutDiv3 = trail
        .data(army.filter(function(d) { return d.div == 3; }))
        .layout();
    svg.selectAll("line.div3")
        .data(trailLayoutDiv3)
        .enter()
        .append("path")
        .style("stroke-width", function(d) { return d.surv/10000; })
        .style("stroke", "#00FF00")
        .style("opacity", function(d) {

            if (d.dir == "A") return 0.3;
            else return 1.0;
        })
        .attr("d", path)
        .attr("class", "div3");

    svg.selectAll("circle.armyCities")
        .data(army)
        .enter()
        .append("circle")
        .attr("cx", function(d) { return projection([d.lon, d.lat])[0]; })
        .attr("cy", function(d) { return projection([d.lon, d.lat])[1]; })
        .attr("r", function(d) { return Math.log(d.surv) + "px"; })
        .attr("fill", function(d) {
            
            if (d.div == 1) return "yellow";
            else if (d.div == 2) return "orange";
            else return "#00FF00";
        })
        .style("opacity", 0.75)
        .attr("stroke", "black")
        .attr("class", "armyCities")
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide);

    svg.selectAll("text.cityLabel")
        .data(city)
        .enter()
        .append("text")
        .attr("x", function(d) { return projection([d.lon, d.lat])[0] - 10; })
        .attr("y", function(d) { return projection([d.lon, d.lat])[1] - 10; })
        .text(function(d) { return d.city; })
        .style("fill", "white")
        .attr("class", "cityLabel");

    // country labels
    var countries = [{"lon": 33.5, "lat": 56.5, "label": "RUSSIA", "color": "white"},
        {"lon": 25, "lat": 56.75, "label": "LATVIA", "color": "white"},
        {"lon": 22, "lat": 55.5, "label": "LITHUANIA", "color": "white"},
        {"lon": 21, "lat": 54.6, "label": "RUSSIA", "color": "white"},
        {"lon": 20, "lat": 53.5, "label": "POLAND", "color": "white"},
        {"lon": 26, "lat": 53, "label": "BELARUS", "color": "white"},
        {"lon": 25.25, "lat": 51.45, "label": "UKRAINE", "color": "white"},
        {"lon": 18, "lat": 55.75, "label": "GULF OF RIGA", "color": "#012660"}];
    svg.selectAll("text.countryLabels")
        .data(countries)
        .enter()
        .append("text")
        .attr("x", function(d) { return projection([d.lon, d.lat])[0]; })
        .attr("y", function(d) { return projection([d.lon, d.lat])[1]; })
        .text(function(d) { return d.label; })
        .style("fill", function(d) { return d.color; })
        .style("font-size", 20)
        .style("opacity", 0.75);

    // legend
    svg.append("rect")
        .attr("x", projection([17.5, 52.75])[0])
        .attr("y", projection([17.5, 52.75])[1])
        .attr("width", 400)
        .attr("height", 150)
        .style("stroke", "white");
    var circleLegends = [{"lon": 17.9, "lat": 52.5, "col": "yellow"},
        {"lon": 18.4, "lat": 52.5, "col": "orange"},
        {"lon": 18.9, "lat": 52.5, "col": "#00ff00"}]
    svg.selectAll("circle.circleLegends")
        .data(circleLegends)
        .enter()
        .append("circle")
        .attr("cx", function(d) { return projection([d.lon, d.lat])[0]; })
        .attr("cy", function(d) { return projection([d.lon, d.lat])[1]; })
        .attr("r", 10)
        .style("fill", function(d) { return d.col; });
    var rectLegends = [{"lon": 17.75, "lat": 52.25, "col": "yellow", "opacity": 0.3},
        {"lon": 18.25, "lat": 52.25, "col": "orange", "opacity": 0.3},
        {"lon": 18.75, "lat": 52.25, "col": "#00ff00", "opacity": 0.3},
        {"lon": 17.75, "lat": 52, "col": "yellow", "opacity": 1},
        {"lon": 18.25, "lat": 52, "col": "orange", "opacity": 1},
        {"lon": 18.75, "lat": 52, "col": "#00ff00", "opacity": 1}]
    svg.selectAll("rect.rectLegends")
        .data(rectLegends)
        .enter()
        .append("rect")
        .attr("x", function(d) { return projection([d.lon, d.lat])[0]; })
        .attr("y", function(d) { return projection([d.lon, d.lat])[1]; })
        .attr("width", 30)
        .attr("height", 20)
        .style("fill", function(d) { return d.col;})
        .style("opacity", function(d) { return d.opacity; });
    svg.append("line")
        .attr("x1", projection([17.75, 51.65])[0])
        .attr("y1", projection([17.75, 51.65])[1])
        .attr("x2", projection([18.75, 51.65])[0])
        .attr("y2", projection([18.75, 51.65])[1])
        .attr("stroke", "white")
        .attr("stroke-width", 2);
    var textLegends = [{"lon": 17.5, "lat": 52.85, "text": "LEGENDS:"},
        {"lon": 19.4, "lat": 52.45, "text": "army stations"},
        {"lon": 19.4, "lat": 52.125, "text": "attack journey with army size (width)"},
        {"lon": 19.4, "lat": 51.875, "text": "return journey with army size (width)"},
        {"lon": 19.4, "lat": 51.625, "text": "temperature (return journey)"}];
    svg.selectAll("text.textLegends")
        .data(textLegends)
        .enter()
        .append("text")
        .attr("x", function(d) { return projection([d.lon, d.lat])[0]; })
        .attr("y", function(d) { return projection([d.lon, d.lat])[1]; })
        .text(function(d) { return d.text; })
        .style("fill", "white");
});
