
# Supervised classification of land cover classes in Pakistan using Random Forest Algorithm
Land cover data shows the surface cover on the ground which can be vegetation, built-up area, bare land, wetlands, agriculture, and other land and water types of the cover of a region. Land use and land cover (LULC) classification provides proxies of the natural and social processes related to urban development, providing stakeholders with crucial information. Remotely sensed images are common to define land use through image classification.
The image classification process involves conversion of multi-band raster imagery into a single-band raster with a number of categorical classes that relate to different types of land cover.

[In this project, I was particularly interested in classifying the water class from the target area.] 

There are two primary ways to classify a multi-band raster image; supervised and unsupervised classification. 
Supervised classification is arguably the most important classical machine learning techniques in remote sensing. 
Using the supervised classification method, an image is classified using spectral signatures (i.e., reflectance values) obtained from training samples (polygons that represent distinct sample areas of the different land cover types to be classified). These samples are collected by you, the image analyst, to classify the image. 

## Random Forest Algorithm
Random forests is a classification and regression algorithm originally designed for the machine learning community. 
This algorithm is increasingly being applied to satellite and aerial image classification. Random forests is an ensemble model which means that it uses the results from many different models to calculate a response. In most cases, the result from an ensemble model will be better than the result from any one of the individual models.

The purpose of this project was, therefore, to conduct a LULC Classification through a supervised training using the Random Forest model. 

## Results
The **overall accuraccy** (metric for evaluating classification models) result obtained was 0.9230769230769231, this is, 92 correct predictions out of 100 total training samples.

![LULC](https://user-images.githubusercontent.com/103893782/210900211-a6709601-1c56-49bf-bc04-410a919089ba.jpeg)

Cartographic processess were conducted using QGIS software and exported output LULC map from Google Earth Engine as a TIF file.

To explore the analysis in detail and accuraccy assessment results you can also access the code implemented in Google Earth Engine by clicking the following link:
https://code.earthengine.google.com/a57f1f3cf1b9295c573f097f33e20794
