var tbody = d3.select("tbody");
var ufo = data;

function init() {
    data.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append('td');
            cell.text(value);
        });
    });
};

// Select the button
var button = d3.select("#button");

button.on("click", function() {

  tbody.html("");
  // Select the input element and get the raw HTML node
  var dateElement = d3.select("#date-time");
  var cityElement = d3.select("#city");
  var stateElement = d3.select("#state");
  var countryElement = d3.select("#country");
  var shapeElement = d3.select("#shape");

  // Get the value property of the input element
  var dateValue = dateElement.property("value");
  var cityValue = cityElement.property("value").toLowerCase();
  var stateValue = stateElement.property("value").toLowerCase();
  var countryValue = countryElement.property("value").toLowerCase();
  var shapeValue = shapeElement.property("value").toLowerCase();


  console.log(dateValue);
  console.log(cityValue);
  console.log(stateValue);
  console.log(countryValue);
  console.log(shapeValue);
 

  var filteredData = ufo.filter(sighting => 
    (sighting.datetime === dateValue || dateValue === '') && (sighting.city === cityValue || cityValue === '')
    && (sighting.state === stateValue || stateValue === '') && (sighting.country === countryValue || countryValue === '')
    && (sighting.shape === shapeValue || shapeValue === ''));

  console.log(filteredData);

    switch (filteredData) {
    case "":
        init();
        console.log(ufo)
    break;
    case filteredData:
        filteredData.forEach((sighting) => {
            var row = tbody.append("tr");
            Object.entries(sighting).forEach(([key, value]) => {
                var cell = row.append('td');
                cell.text(value);
            });
        });
    break;
    
    }
});

init();