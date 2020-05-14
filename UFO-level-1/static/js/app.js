// from data.js
var tableData = data;

// YOUR CODE HERE!
var filterButton = d3.select('#filter-btn');
var ufoTable = d3.select('#ufo-table');
var tbody = d3.select("tbody");

filterButton.on("click", function(){
    
    tbody.text("");

    var date = d3.select("#datetime").property("value");
    var filtered = tableData.filter(row => row.datetime === date);
    console.log(filtered);

    filtered.forEach((datarow) => {
        var row = tbody.append("tr");
        Object.entries(datarow).forEach(
            ([key, value]) => 
            {var cell = row.append("td");
            cell.text(value);} );
      });
      
});
