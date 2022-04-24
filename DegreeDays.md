
## Pest Control: Degree Days

### What is Degree Days?

Degree Days (DD) is a mathematical model that uses temperature accumulation to estimate biological growth rates. It predicts the speed of growth and number of generations of an invasive pest occurring in a period of time. The accuracy of the model relies on the fact that insects have a predictable development pattern based on heat accumulation. Insects are exothermic (“cold-blooded”) and their body temperature and growth are, therefore, affected by their surrounding temperature. Amazing, isn't it?

### Application:

Given that insect activity varies from year to year depending on climate fluctuations, DD is implemented to time treatments for insect pests. As long as accurate weather data can be obtained, this model can help growers to pinpoint a specific treatment date each year.

### Data analysis:

The goal is to predict the dates when life stages (Hatching and Lifecycle) will occurr. For this exercise, I implemented a DD model for the Fall Army Worm (FAW). To calculate the DD I took into account upper and lower temperature limits required for FAW's development.

### Parameters needed

1. Farmers plant their crops in on April 10th.
2. The adult insects will lay eggs on the new seedlings after these emerge, 10 days later.
3. It takes about 150 DD from FAW adults laying eggs, to the majority of the eggs hatching into larvae
4. It takes about 550 DD to complete a full lifecycle of the FAW  (Adult – Adult)
5. Upper Developmental Threshold --> 35.5ºC
6. Lower Developmental Threshold --> 12.7ºC
