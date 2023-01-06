
//________________STEP 1_______________________
//Load Landsat 8 2015 imagery.
var L8_before = ee.ImageCollection("LANDSAT/LC08/C02/T1_L2") 
.filterDate('2015-02-06', '2015-02-25')
.filterBounds(ROI)
.filterMetadata('CLOUD_COVER', 'less_than', 10); //Load only images with less than 10% of cloud cover

//Applies scaling factors to optical and thermal L8 images.
function applyScalFactors(L8_before) {
  var opticalBands = L8_before.select('SR_B.').multiply(0.0000275).add(-0.2);
  var thermalBands = L8_before.select('SR_B.').multiply(0.00341802).add(149.0);
  return L8_before.addBands(opticalBands, null, true)
              .addBands(opticalBands, null, true);
}

var rescale = L8_before.map(applyScalFactors); //this variable applies the previous function to every satellite image
var L8_before = rescale.median();

var visualization = {
  bands: ['SR_B4', 'SR_B3', 'SR_B2'], 
  min:0.0, 
  max:0.3
};

Map.addLayer(L8_before, visualization, 'Landsat 8 2015');
Map.centerObject(ROI);

//________________STEP 2__________________
//Create training dataset
var training = before_Bareland.merge(before_WetCropland).merge(before_water);
var label = 'Class';
var bands = ['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B7']; //only the optical bands, not thermal
var input = L8_before.select(bands); //we will only use the bands prviously selected (optical)

//Extract landsat values for all the training points
var trainImage = input.sampleRegions({
  collection: training,
  properties:[label],
  scale: 30
});

//Deploy RandomForest algorithm
var trainingData = trainImage.randomColumn();
var trainSet = trainingData.filter(ee.Filter.lessThan('random', 0.8));
var testSet = trainingData.filter(ee.Filter.greaterThan('random', 0.8));

//Define Random Forest classifier and train it with our classes.
var classifier = ee.Classifier.smileRandomForest(10)
    .train({
      features: trainSet,
      classProperty: label,
      inputProperties: bands
    });
   

//Classify the image
var Classified_2015 = input.classify(classifier);

//Define a palette for the classification
var landcoverPalette = [
  '#187fff', //water (0)
  '#76aa3d', //cropland (1)
  '#ddda6f', //baresoil (2)
  ];

var viz = {palette:landcoverPalette, min:0, max:2};
Map.addLayer(Classified_2015.clip(ROI), viz, 'Classification 2015');

//_______________STEP 3________________
//Accuracy Assessment 2015

//Classify the testingSet and get a confusion matrix.
var confusionMatrix = ee.ConfusionMatrix(testSet.classify(classifier)
    .errorMatrix({
      actual: 'Class',
      predicted: 'classification'
    }));

print('Confusion matrix 2015:', confusionMatrix);
print('Overall Accuracy 2015:', confusionMatrix.accuracy());
print('Producers Accuracy 2015:', confusionMatrix.producersAccuracy);
print('Consumers Accuracy 2015:', confusionMatrix.consumersAccuracy);


//________________STEP 4_______________________
//Load Landsat 8 2016 imagery.
var L8_after = ee.ImageCollection("LANDSAT/LC08/C02/T1_L2") 
.filterDate('2016-02-06', '2016-02-25')
.filterBounds(ROI)
.filterMetadata('CLOUD_COVER', 'less_than', 10); //Load only images with less than 10% of cloud cover

//Applies scaling factors to optical and thermal L8 images.
function applyScalFactors(L8_after) {
  var opticalBands = L8_after.select('SR_B.').multiply(0.0000275).add(-0.2);
  var thermalBands = L8_after.select('SR_B.').multiply(0.00341802).add(149.0);
  return L8_after.addBands(opticalBands, null, true)
              .addBands(opticalBands, null, true);
}

var rescale = L8_after.map(applyScalFactors); //this variable applies the previous function to every satellite image
var L8_after = rescale.median();

var visualization = {
  bands: ['SR_B4', 'SR_B3', 'SR_B2'], 
  min:0.0, 
  max:0.3
};

Map.addLayer(L8_after, visualization, 'Landsat 8 2016');
Map.centerObject(ROI);

//________________STEP 5__________________
//Create training dataset 2016
var training = after_Bareland.merge(after_WetCropland).merge(after_water);
var label = 'Class';
var bands = ['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B7']; //only the optical bands, not thermal
var input = L8_after.select(bands); //we will only use the bands prviously selected (optical)

//Extract landsat values for all the training points
var trainImage = input.sampleRegions({
  collection: training,
  properties:[label],
  scale: 30
});

//Deploy RandomForest algorithm
var trainingData = trainImage.randomColumn();
var trainSet = trainingData.filter(ee.Filter.lessThan('random', 0.8));
var testSet = trainingData.filter(ee.Filter.greaterThan('random', 0.8));

//Define Random Forest classifier and train it with our classes.
var classifier = ee.Classifier.smileRandomForest(10)
    .train({
      features: trainSet,
      classProperty: label,
      inputProperties: bands
    });
   

//Classify the image
var Classified_2016 = input.classify(classifier);

//Define a palette for the classification
var landcoverPalette = [
  '#187fff', //water (0)
  '#76aa3d', //cropland (1)
  '#ddda6f', //baresoil (2)
  ];

var viz = {palette:landcoverPalette, min:0, max:2};
Map.addLayer(Classified_2016.clip(ROI), viz, 'Classification 2016');

//_______________STEP 6________________
//Accuracy Assessment 2016

//Classify the testingSet and get a confusion matrix.
var confusionMatrix = ee.ConfusionMatrix(testSet.classify(classifier)
    .errorMatrix({
      actual: 'Class',
      predicted: 'classification'
    }));

print('Confusion matrix 2016:', confusionMatrix);
print('Overall Accuracy 2016:', confusionMatrix.accuracy());
print('Producers Accuracy 2016:', confusionMatrix.producersAccuracy);
print('Consumers Accuracy 2016:', confusionMatrix.consumersAccuracy);

//________________STEP 7_______________
//Conduct change detection in Water class

var water_2016 = Classified_2016.clip(ROI).eq(0);
Map.addLayer(water_2016, {min:0, max:1, palette: ['white', 'blue']}, 'Water 2016');
var water_2015 = Classified_2015.clip(ROI).eq(0);
Map.addLayer(water_2015, {min:0, max:1, palette: ['white', 'blue']}, 'Water 2015');

//Conduct change detection
var Water_Loss = water_2016.subtract(water_2015).neq(0)
Map.addLayer(Water_Loss, {min:0, max:1, palette: ['white', 'blue']}, 'Water Surface Loss');

//Convert change detection result to vector
var water_vector = Water_Loss.selfMask().reduceToVectors({
  geometry: ROI,
  scale: 30,
  eightConnected: false,
  maxPixels: 1e10});
Map.addLayer(water_vector)

//___________________STEP 8______________________
//Export outputs
/*
//LULC Map 2015
Export.image.toDrive({
  image:Classified_2016,
  description:'Classified_2016',
  scale: 30,
  region: ROI,
  maxPixels: 1e13
});

//LULC Map 2016
Export.image.toDrive({
  image:Classified_2016,
  description:'Classified_2016',
  scale: 30,
  region: ROI,
  maxPixels: 1e13
});

//water_vector 
Export.table.toDrive({
  collection: water_vector,
  description: 'water_vector',
  folder: 'Personal',
  fileNamePrefix: 'water_vector',
  fileFormat: 'SHP'})
  
//Water_Loss
Export.image.toDrive({
  image: Water_Loss,
  description:'Water_Loss',
  scale: 30,
  region: ROI,
  maxPixels: 1e13
});

//water_2015
Export.image.toDrive({
  image:water_2015,
  description:'water_2015',
  scale: 30,
  region: ROI,
  maxPixels: 1e13
});

//water_2016
Export.image.toDrive({
  image:water_2016,
  description:'water_2016',
  scale: 30,
  region: ROI,
  maxPixels: 1e13
});

//Landsat 8 2015
Export.image.toDrive({
  image:L8_before.visualize(visualization),
  description:'Landsat_8_2015',
  scale: 30,
  region: ROI,
  maxPixels: 1e13
});

//Landsat 8 2016
Export.image.toDrive({
  image:L8_after.visualize(visualization),
  description:'Landsat_8_2016',
  scale: 30,
  region: ROI,
  maxPixels: 1e13
});
*/
