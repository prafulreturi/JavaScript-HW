// Assign the data from `data.js` to a descriptive variable
var ufoData = data;


// Define a function to append table based on data
function ufoTable(report) {
    var tbody = d3.select("tbody");
    var row = tbody.append("tr");
    Object.entries(report).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        
    });
}

// Display the entire dataset as default
ufoData.forEach(ufoTable);

// Select the submit button
var submit = d3.select("#filter-btn");

// Click event of datetime filter
 submit.on("click", function() {

 // Remove existing table
     d3.select("tbody").html("");

// Prevent the page from refreshing
     d3.event.preventDefault();

// Get the value property of the input element
     var inputValue = d3.select("#datetime").property("value");

// Filter reports
     var ufoFilteredData = ufoData.filter(record => record.datetime === inputValue);
     console.log(ufoFilteredData)

// Display the filtered dataset
     ufoFilteredData.forEach(ufoTable);

 });



