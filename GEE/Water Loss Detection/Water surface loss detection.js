/*
---------------------------------------------
           ANALYSIS WITH LANDSAT 8
----------------------------------------------
__________________STEP 1_______________________
*/
//Load Landsat 8 2015 image and training data
var L8_before = ee.ImageCollection("LANDSAT/LC08/C02/T1_L2") 
.filterDate('2015-02-06', '2015-02-25')
.filterBounds(ROI)
.filterMetadata('CLOUD_COVER', 'less_than', 10);

//Applies scaling factors to optical and thermal L9 images.
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

Map.addLayer(L8_before, visualization, 'L8_before');
Map.centerObject(ROI);

//Training data for 2015 image
var before_training = before_water.merge(before_Bareland).merge(before_WetCropland);

// Overlay the point on the image to get training data.
var label = 'Class';
var bands = ['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B7']; //only the optical bands, not thermal
var before_input = L8_before.select(bands); //we will only use the bands prviously selected (optical)

//Extract landsat values for all the training points
var trainImage = before_input.sampleRegions({
  collection: before_training,
  properties:[label],
  scale: 30
});

//Deploy RandomForest algorithm
var trainingData = trainImage.randomColumn();
var trainSet = trainingData.filter(ee.Filter.lessThan('random', 0.8));
var testSet = trainingData.filter(ee.Filter.greaterThan('random', 0.8));

//Define Random Forest classifier and train it with our classes.
var before_classifier = ee.Classifier.smileRandomForest(10)
    .train({
      features: trainSet,
      classProperty: label,
      inputProperties: bands
    });
   
//Classify the image
var before_classified = before_input.classify(before_classifier);

//Define a palette for the classification
var landcoverPalette = [
  '#187fff', //Water (0)
  '#ddda6f', //Bareland (2)
  '#449e16', //WetCropland (3)
  ];

var viz = {palette:landcoverPalette, min:0, max:2};
Map.addLayer(before_classified.clip(ROI), viz, 'Before_Classification');

//Accuracy Assessment 2015
//Classify the testingSet and get a confusion matrix.
/*var confusionMatrix_2015 = ee.ConfusionMatrix(testSet.classify(before_classifier)
    .errorMatrix({
      actual: 'Class',
      predicted: 'Before_Classification'
    }));

print('Confusion matrix_2015:', confusionMatrix);
print('Overall Accuracy 2015:', confusionMatrix.accuracy());
print('Producers Accuracy 2015:', confusionMatrix.producersAccuracy);
print('Consumers Accuracy 2015:', confusionMatrix.consumersAccuracy);
*/

//________________STEP 2_______________________

//Load Landsat 8 2016 image and training data
var L8_after = ee.ImageCollection("LANDSAT/LC08/C02/T1_L2") 
.filterDate('2016-02-06', '2016-02-25')
.filterBounds(ROI)
.filterMetadata('CLOUD_COVER', 'less_than', 10);

//Applies scaling factors to optical and thermal L9 images.
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

Map.addLayer(L8_after, visualization, 'L8_after');
Map.centerObject(ROI);

//Training data for 2015 image
var after_training = after_water.merge(after_Bareland).merge(after_WetCropland);

// Overlay the point on the image to get training data.
var label = 'Class';
var bands = ['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B7']; //only the optical bands, not thermal
var after_input = L8_after.select(bands); //we will only use the bands prviously selected (optical)

//Extract landsat values for all the training points
var trainImage = after_input.sampleRegions({
  collection: after_training,
  properties:[label],
  scale: 30
});

//Deploy RandomForest algorithm
var trainingData = trainImage.randomColumn();
var trainSet = trainingData.filter(ee.Filter.lessThan('random', 0.8));
var testSet = trainingData.filter(ee.Filter.greaterThan('random', 0.8));

//Define Random Forest classifier and train it with our classes.
var after_classifier = ee.Classifier.smileRandomForest(10)
    .train({
      features: trainSet,
      classProperty: label,
      inputProperties: bands
    });
   
//Classify the image
var after_classified = after_input.classify(after_classifier);

//Define a palette for the classification
var landcoverPalette = [
  '#187fff', //Water (0)
  '#ddda6f', //bareland (2)
  '#449e16', //WetCropland (3)
  ];

var viz = {palette:landcoverPalette, min:0, max:2};
Map.addLayer(after_classified.clip(ROI), viz, 'After_Classification');

//Accuracy Assessment 2016
//Classify the testingSet and get a confusion matrix.
/*var confusionMatrix_2016 = ee.ConfusionMatrix(testSet.classify(after_classifier)
    .errorMatrix({
      actual: 'Class',
      predicted: 'After_Classification'
    }));

print('Confusion matrix_2016:', confusionMatrix);
print('Overall Accuracy 2016:', confusionMatrix.accuracy());
print('Producers Accuracy 2016:', confusionMatrix.producersAccuracy);
print('Consumers Accuracy 2016:', confusionMatrix.consumersAccuracy);
*/

//___________________STEP 3______________________
//Conduct change detection in water class

var after_water = after_classified.clip(ROI).eq(0);
Map.addLayer(after_water, {min:0, max:1, palette: ['white', 'blue']}, 'after_water');
var before_water = before_classified.clip(ROI).eq(0);
Map.addLayer(before_water, {min:0, max:1, palette: ['white', 'blue']}, 'before_water');

//Conduct change detection
var Water_Loss = after_water.subtract(before_water).neq(0)
Map.addLayer(Water_Loss, {min:0, max:1, palette: ['white', 'blue']}, 'Water_Loss');

//Convert change detection result to vector
var water_vector = Water_Loss.selfMask().reduceToVectors({
  geometry: ROI,
  scale: 30,
  eightConnected: false,
  maxPixels: 1e10});
Map.addLayer(water_vector)

//___________________STEP 4______________________
//Export outputs
/*
//after_classified
Export.image.toDrive({
  image:after_classified,
  description:'after_classified',
  scale: 30,
  region: ROI,
  maxPixels: 1e13
});

//before_classified
Export.image.toDrive({
  image:before_classified,
  description:'before_classified',
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

//before_water
Export.image.toDrive({
  image:before_water,
  description:'before_water',
  scale: 30,
  region: ROI,
  maxPixels: 1e13
});

//after_water
Export.image.toDrive({
  image:after_water,
  description:'after_water',
  scale: 30,
  region: ROI,
  maxPixels: 1e13
});

//before
Export.image.toDrive({
  image:L8_before.visualize(visualization),
  description:'before',
  scale: 30,
  region: ROI,
  maxPixels: 1e13
});

//after
Export.image.toDrive({
  image:L8_after.visualize(visualization),
  description:'after',
  scale: 30,
  region: ROI,
  maxPixels: 1e13
});
*/