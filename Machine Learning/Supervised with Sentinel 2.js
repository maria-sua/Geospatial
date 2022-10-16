

//Analysing vegetation growth in target area 2019 - 2022

//////////////// Analysis ////////////////
var filtered = S2.filterDate('2019-05-01', '2020-05-15')
    .filterBounds(crops);
var image = ee.Image(filtered.first());

// var nir = image.select('B8');
// var red = image.select('B4');
// var ndvi = (nir.subtract(red).divide(nir.add(red)));
var ndvi = image.normalizedDifference(['B8', 'B4']);

var clipped = ndvi.clip(crops);

//////////////// User Interface ////////////////
Map.addLayer(clipped, {min:0, max:1}, 'NDVI');
