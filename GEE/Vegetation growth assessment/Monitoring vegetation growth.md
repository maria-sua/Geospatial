

### Analysing vegetation growth in target area 2019 - 2020

**Analysis in Google Earth Engine**

```
var filtered = S2.filterDate('2019-05-01', '2020-05-15')
    .filterBounds(crops);
var image = ee.Image(filtered.first());

// var nir = image.select('B8');
// var red = image.select('B4');
// var ndvi = (nir.subtract(red).divide(nir.add(red)));
var ndvi = image.normalizedDifference(['B8', 'B4']);

var clipped = ndvi.clip(crops);
var ndwiViz = {min: 0 , max: 1, palette: ['green', 'white', 'yellow']};

//////////////// User Interface ////////////////
Map.addLayer(clipped, ndwiViz, 'NDVI');
print(ui.Chart.image.doySeries(ndvi.select('ndvi'), geometry, ee.Reducer.mean(), 30))

//////////////// Export image to tiff //////////
Export.image.toDrive({
  image: clipped, 
  description: 's2_UTM',
  scale: 10,
  region:crops,
  maxPixels: 6000000000
}); 

```


**NDVI visualization in target area (2019-05-01 - 2020-05-15)**
![ee-chart](https://user-images.githubusercontent.com/103893782/196027640-025432a7-f563-40ce-9602-84f9f3031dc7.png)


![crops_ndvi](https://user-images.githubusercontent.com/103893782/196027731-f0c4bdb5-dec8-4602-94f6-1c21f1fe7ad8.JPG)

Things to sort out:
- Graph ( add NDVI index label, change date format
