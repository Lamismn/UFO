// import the data from data.js
const tableData = data;

// Reference the HTML table using d3 and add data to the  table cells
var tbody = d3.select("tbody");
function buildTable(data) {
    tbody.html("");
    data.forEach((dataRow) => {
    let row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
    }
    );
});
}
// Add the function reacting to user input
function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    // pseudocode practice
    // if (a date is entered) {
    //Filter the default data to show only the date entered
    // & apply filter only to rows where datetime value strictly matches the date value (===)
    if (date) { 
        filteredData = filteredData.filter(row => row.datetime===date);
    };
    // Build the table by calling buildTable function only for the filteredData
    buildTable(filteredData);
};
// add a line to listen to the click button & perform the handleClick function
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);

