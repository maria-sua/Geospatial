


```
// import the satellite data from the European Space Agency
var S2 = ee.ImageCollection("COPERNICUS/S2");

//filter for AOI
S2 = S2.filterBounds(AOI);
print(S2);

//filter for date
S2 = S2.filterDate("2020-03-11", "2020-03-28");
print(S2);

var image = ee.Image(S2.first());
print(image)

Map.addLayer(image,{min:0,max:3000,bands:"B4,B3,B2"}, "AOI");

//Map.addLayer(image,{min:0,max:3000,bands:"B8,B4,B3"}, "AOI");

// set the selection bands
var predictionBands = image.bandNames();
//print (predictionBands);

var trainingData = water.merge(vegetation).merge(urban).merge(bare_soil);

// sample the regions
var classifierTraining = image.select(predictionBands).sampleRegions(
                       {collection: trainingData, 
                         properties: ['land_class'], scale: 20 });

//train the classifier
var classifier =  ee.Classifier.smileRandomForest(300).train({features:classifierTraining, 
                                                    classProperty:'land_class', 
                                                   inputProperties: predictionBands});
// get the classified image
var classified = image.select(predictionBands).classify(classifier);

//add the classified image to the map
Map.addLayer(classified,  imageVisParam, "LULC AOI");

//Export image to tiff
Export.image.toDrive({
  image: classified, 
  description: 'Sup_RandomForest',
  scale: 10,
  region:AOI,
  maxPixels: 6000000000
}); 
```

![sup_RandomForest](https://user-images.githubusercontent.com/103893782/196035412-6004fc2a-8d57-41df-87d9-02e678f53130.JPG)
