
window.onload = function () {
    //Width and height
    var w = 500;
    var h = 300;

    //Define map projection
    var projection = d3.geoAlbersUsa()
        .translate([w / 2, h / 2])
        .scale([500]);

    //Define path generator
    var path = d3.geoPath()
        .projection(projection);

    var node = document.getElementById("svg")
    //Create SVG element
    var svg = d3.select(node)
        .append("svg")
        .attr("width", w)
        .attr("height", h);

    //Load in GeoJSON data
    d3.json("us-states.json", function (json) {

        //Bind data and create one path per GeoJSON feature
        svg.selectAll("path")
            .data(json.features)
            .enter()
            .append("path")
            .attr("d", path)
            .style("fill", "steelblue");
    });

    getMap('taiwan.geojson', function(data){
        console.log(data)
        document.getElementById('map').appendChild(data)

    })
}
