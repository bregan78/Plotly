/* The following is an example on how you might structure your code.
This is not the only way to complete this assignment.
Feel free to disregard and create your own code */

// Define a function that will create metadata for given sample
function buildMetadata(sample) {

    // Read the json data
    d3.json("samples.json").then((data) => {
        var metadata = data.metadata;
        //console.log(metadata);
        var filtereddata = metadata.filter(test1 => test1.id == sample);
        //console.log(filtereddata);
        var id = filtereddata[0];
        //console.log(id);
        var page = d3.select("#sample-metadata");
        page.html("");

        // Parse and filter the data to get the sample's metadata
        Object.entries(id).forEach(([key, value]) => {
            page.append("h3").text(`${key.toUpperCase()}: ${value}`);
          });
    });
}

// Define a function that will create charts for given sample
function buildCharts(sample) {

    d3.json("samples.json").then((data) => {
        var samples = data.samples;
        var filtereddata = samples.filter(test1 => test1.id == sample);
        //console.log(filtereddata);
        var id = filtereddata[0];
        //console.log(id);

        var ids= id.otu_ids;
        console.log(ids);
        var labels=id.otu_labels;
        console.log(labels);
        
        var sample_values=id.sample_values;
        console.log(sample_values);

        // Create bar chart in correct location
        var trace1 = {
            x: sample_values.slice(0, 10).reverse(),
            y: labels,
            type: "bar",
            orientation: 'h'
          };
          
          // Create the data array for the plot
          var data = [trace1];
          
          // Define the plot layout
          var layout = {
            title: "bacteria",
            xaxis: { title: "sample_values" },
            yaxis: { title: "otu_ids" },
            margin: {l: 25,t: 100, b: 100
              }
          };
          
          // Plot the barchart
          Plotly.newPlot("bar", data, layout);

          //bubblechart 
          var size = sample_values;
          var trace1 = {
            x: ids,
            y: sample_values,
            text: labels,
            mode: 'markers',
            marker: {
              size: size,
              color: ids
            }
          };
          
          var data = [trace1];
          
          var layout = {
            title: "bacteria",
            showlegend: false,
            height: 600,
            width: 1000
          };
           // Plot the bubble chart
          Plotly.newPlot('bubble', data, layout);
        
    });
}

// Define function that will run on page load
function init() {

    // Read json data
    var selector = d3.select("#selDataset");
    d3.json("samples.json").then((datadropdown) => {
        var sampleNames = datadropdown.names;
        
        sampleNames.forEach((sampleid) => {
            selector.append("option").text(sampleid).property("value", sampleid);
          });
      
          // Use the first sample from the list to build the initial plots
          var defaultsample = sampleNames[0];
          buildMetadata(defaultsample);
          buildCharts(defaultsample);
    });
    
    
}

function optionChanged(sample){
    buildMetadata(sample);
    buildCharts(sample);

}

// Initialize dashboard on page load
init();

