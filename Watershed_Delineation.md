---
title: "Watershed_Delineation"
tags: ""
---

So far I have managed to display the basins over Telangana and clipped it to my AOI (which corresponds to one of the historical maps that I have already worked on), everything done in GEE, using the code shown below. However, once I export it and import into QGIS I cannot see anything.
```
var AOI = ee.FeatureCollection
("projects/ee-marsuarezmoreno/assets/56_P_NE_Watersheds");

var watersheds = ee.FeatureCollection
("WWF/HydroSHEDS/v1/Basins/hybas_9");

watersheds = watersheds.style({
  color: "white",
  width: 3.0,
});

var clipped = watersheds.clip(AOI);

Map.addLayer(clipped, {color: 'blue'}, 'AOI_watershed');

Export.image.toDrive({
  image: clipped,
  description: 'clipped_watershed',
  scale: 30,
  region: AOI
});
```

It turns out that the 'WWF/HydroSHEDS/v1/Basins/hybas_9' product comes as a Table, and therefore I cannot extract it as an image ('Export.**image**.toDrive'). I have to extract it as a feature ('Export.**table**.toDrive'). 
I have changed the code:

```
var AOI = ee.FeatureCollection
("projects/ee-marsuarezmoreno/assets/56_P_NE_Watersheds");

var sheds = ee.FeatureCollection("WWF/HydroSHEDS/v1/Basins/hybas_9")
  .filterBounds(AOI); 
  
Map.addLayer(sheds);

Export.table.toDrive({
  collection: sheds,
  description:'vectorsToDriveExample',
  fileFormat: 'SHP'
});
```
`.filterBounds(AOI)` is to "clip" or "reduce" the Watershed feature to my AOI.

And I got the following:
![image.png](https://boostnote.io/api/teams/b_PuTqecE/files/0686c81455c0f4a1e2c5758b8801293c48497468024060de913a0f1dafb6cea3-image.png)
Here is the [link](https://code.earthengine.google.com/) to the GEE code editor.
