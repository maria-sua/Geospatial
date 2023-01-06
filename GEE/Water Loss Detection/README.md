
# Water surface loss detection applying Change Detection analyses

Climatic changes can induce modification of lake surfaces and riverbeds with severe implications for agricultural and economic activities. Over the last years,  surface water has been shrinking, drying or has completely disappeared. Remote sensing-based methods are suitable to monitor the water bodies of the landscape through time and detect physical changes. This can help detect and evaluate water scarcity and improve decision-making to reduce environmental, social and economical risks.

The study area is located in the Bugga Reservoir in Telangana, India. This water body dried out notably between 2015 and 2016.

The goal of this project is to conduct change detection analysis through supervised classifications and  multi-temporal images between 2015 and 2016 to detect water surface loss.

## Material
- **Google Earth Engine (GEE)**: GEE is a powerful cloud-based system for collecting and analysing massive amounts of remote sensing data. Among others, it has the ability to calculate time series of values quickly with cloud processing. The main core of the processing analyses were conducted in GEE and coded in JavaScript.
- **QGIS Software**: This software was used to visualise the final ouputs, conduct further geoprocessing analytics, and create maps. Due to the limited cartographic capabilities of GEE, QGIS provides the functionalities required for laying out maps or graphic rendering.
- **Satellite Imagery**: Given the purpose of collecting and processing imagery both in 2015 and 2016, this project has used satellite data from **Landsat 8** Collection 2, Tier 1, which provides atmospherically corrected surface reflectance and there is available data since 2013. As shown in the Landsat images, compared to February 2015, the Bugga Reservoir experimented significant loss of water in February 2016.. 

## Results


![Output-1](https://user-images.githubusercontent.com/103893782/210978462-9a65631e-f21d-4f43-a1c5-037476e7f0d2.JPG)

![Output-4](https://user-images.githubusercontent.com/103893782/210985691-e802d0ab-4d48-4d63-b04a-502ccbe2ba85.png)

To explore the analysis and results in detail you can also access the code implemented in Google Earth Engine by clicking the following link:
https://code.earthengine.google.com/5307c7ee38f19c45bd482db6e7aebe67
