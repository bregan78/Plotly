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
    // Use d3 to select the page with id of `#sample-metadata`
        var page = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
        page.html("");

        // Parse and filter the data to get the sample's metadata
        Object.entries(id).forEach(([key, value]) => {
            page.append("h3").text(`${key.toUpperCase()}: ${value}`);
          });
        // Specify the location of the metadata and update it
    });
}

// Define a function that will create charts for given sample
function buildCharts(sample) {

    d3.json("samples.json").then((data) => {
        var samples = data.samples;

        // Parse and filter the data to get the sample's OTU data
        var filtereddata = samples.filter(test1 => test1.id == sample);
        //console.log(filtereddata);
        var id = filtereddata[0];
        //console.log(id);
        // Pay attention to what data is required for each chart
        var ids= id.otu_ids;
        console.log(ids);
        var labels=id.otu_labels;
        console.log(labels);
        
        var sample_values=id.sample_values;
        console.log(sample_values);

        // Create bar chart in correct location

        // Create bubble chart in correct location
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
    // Use first sample to build metadata and initial plots
    
}

function optionChanged(sample){
    buildMetadata(sample);
    buildCharts(sample);
    // Update metadata with newly selected sample

    // Update charts with newly selected sample

}

// Initialize dashboard on page load
init();

