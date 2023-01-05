# Image Classification With HSV Color Model Processing

In color image processing, there are various color models. The RGB (red green blue) is widely used. In general, RGB color space is a general color space widely used in digital image display and optical instruments. However, RGB color space is not sensitive to human visual perception or statistical analysis. In addition to RGB, we can also find the HSV color space where there are 3 components namely, hue, saturation, and value. Hue denotes the property of color such as blue, green, red, and so on. Saturation denotes the perceived intensity of a specific color. Value denotes brightness perception of a specific color.

HSV color space is a non-linear transform from RGB color space that can describe perceptual color relationship more accurately than RGB color space. 
The advantage of using HSV color space on Image Classification is that it separates the color into hue, saturation, and value which means observation of color variation can be individually discriminated.

## HSV applied to image classification

Historical maps are an important source of topographic, statistical and other types of information of past ages. Although it is possible to manually extract the required data from these maps, it is a tedious process especially in the case of sheets of old surveys that have very high information density. The goal is usually to transform specific content of these maps into vectorbased feature data with attributes that can be further processed, and analysed by GIS software. 

Before vectorising, we need to select those pixels of the raster that the features are shown by. This is called **colour segmentation**. 
Segmentation is , therefore, needed to decompose an image into meaningful parts for further analysis, resulting in a higherlevel representation of the image pixels.

The goal of this exercise was, therefore, to generate features by using the properties of the HSV color space for clustering pixels into segmented
regions and to extract specific features of interest from the historical map, in this case, wells.

## Material
For this exercise I have used an historical map sheet of the Survey of India depicting several wells all over the area.

## Results

![wells](https://user-images.githubusercontent.com/103893782/210890642-7639c273-3d73-4709-9830-bf72a105f528.png)

Note that similar pixel values between different features classes can lead to incomplete segmentation.
This exercise is incomplete as it needs to be applied to the whole map sheet. Thus, it needs further analysis.
