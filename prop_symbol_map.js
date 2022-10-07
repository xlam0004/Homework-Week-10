var vg_1 = "prop_symbol_map.vg.json"

// display at the propotional_symbol_map division, JSON file name
vegaEmbed("#propotional_symbol_map", vg_1).then(function(result){}).catch(console.error);

var vg_2 = "scatter_plot_annotated.vg.json";
vegaEmbed("#scatter_plot", vg_2).then(function(result){}).catch(console.error);