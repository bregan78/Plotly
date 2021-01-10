# Plotly


##This repo contains the following:
1. Setting up Plotly with a bar chart and bubble chart



* Populate a dropdown menu with all of the Sample ID's. When an option is selected, this will update all of the charts


* Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual
	- Use sample_values as the values for the bar chart.
	- Use otu_ids as the labels for the bar chart.

* Create a bubble chart that displays each sample
	- Use otu_ids for the x values.
	- Use sample_values for the y values.
	- Use sample_values for the marker size.
	- Use otu_ids for the marker colors.
	- Use otu_labels for the text values.

* Display sample metadata, i.e., an individual's demographic information.
	- Display each key-value pair from the metadata JSON object somewhere on the page
