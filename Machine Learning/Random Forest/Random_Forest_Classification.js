
//________________STEP 1_______________________

//Load Landsat 9 imagery.
var L9 = ee.ImageCollection("LANDSAT/LC09/C02/T1_L2")
.filterDate('2022-01-01', '2022-05-30')
.filterBounds(ROI)
.filterMetadata('CLOUD_COVER', 'less_than', 10); //Load only images with less than 10% of cloud cover

//Apply scaling factors to optical and thermal L9 images.
function applyScalFactors(L9) {
  var opticalBands = L9.select('SR_B.').multiply(0.0000275).add(-0.2);
  var thermalBands = L9.select('SR_B.').multiply(0.00341802).add(149.0);
  return L9.addBands(opticalBands, null, true)
              .addBands(opticalBands, null, true);
}

var rescale = L9.map(applyScalFactors); //this variable applies the previous function to every satellite image
var L9 = rescale.median();

var visualization = {
  bands: ['SR_B4', 'SR_B3', 'SR_B2'], 
  min:0.0, 
  max:0.3
};

Map.addLayer(L9, visualization, 'Landsat 9');
Map.centerObject(ROI);

//________________STEP 2__________________

//Create training dataset
var training = Baresoil.merge(Cropland).merge(Water);
var label = 'Class';
var bands = ['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B7']; //only the optical bands, not thermal
var input = L9.select(bands); //we will only use the bands prviously selected (optical)

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
var classified = input.classify(classifier);

//Define a palette for the classification
var landcoverPalette = [
  '#187fff', //water (0)
  '#76aa3d', //cropland (1)
  '#ddda6f', //baresoil (2)
  ];

var viz = {palette:landcoverPalette, min:0, max:2};
Map.addLayer(classified.clip(ROI), viz, 'Classification');

//_______________STEP 3________________

//Accuracy Assessment

//Classify the testingSet and get a confusion matrix.
var confusionMatrix = ee.ConfusionMatrix(testSet.classify(classifier)
    .errorMatrix({
      actual: 'Class',
      predicted: 'classification'
    }));

print('Confusion matrix:', confusionMatrix);
print('Overall Accuracy:', confusionMatrix.accuracy());
print('Producers Accuracy:', confusionMatrix.producersAccuracy);
print('Consumers Accuracy:', confusionMatrix.consumersAccuracy);

/*var testAccuracy = classified.errorMatrix('Land_Cover_Type_1','classified');
print('Validation error matrix: ', testAccuracy);
print('Validation overall accuracy: ', testAccuracy.accuracy());
*/

//Export Accuracy Assessment
var exportAccuracy = ee.Feature(null, {matrix: confusionMatrix.array()})

Export.table.toDrive({
  collection: ee.FeatureCollection(exportAccuracy),
  description: 'exportAccuracy',
  fileFormat: 'CSV'
});
