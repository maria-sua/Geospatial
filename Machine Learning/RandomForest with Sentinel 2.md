
### Analysis conducted in Google Earth Engine using Random Forest Algorithm

```
///////////////Data Imported ////////////////////
var water = 
    /* color: #45b6ff */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-4.704182537481811, 40.01803359478483]),
            {
              "land_type": "water",
              "land_class": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.698946865484741, 40.01586437942922]),
            {
              "land_type": "water",
              "land_class": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.691565426275757, 40.02164880047911]),
            {
              "land_type": "water",
              "land_class": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.68049326746228, 40.027367007447204]),
            {
              "land_type": "water",
              "land_class": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.666206181465832, 39.955711810204185]),
            {
              "land_type": "water",
              "land_class": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.677879155098645, 39.9595276831276]),
            {
              "land_type": "water",
              "land_class": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.684874356209485, 39.96324466494392]),
            {
              "land_type": "water",
              "land_class": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.662172139107434, 39.96018557073186]),
            {
              "land_type": "water",
              "land_class": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.658223927437512, 39.962027622350185]),
            {
              "land_type": "water",
              "land_class": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.656636059700696, 39.95692896521135]),
            {
              "land_type": "water",
              "land_class": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.660155117928235, 39.94932961588144]),
            {
              "land_type": "water",
              "land_class": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.650971234261243, 39.94015005525569]),
            {
              "land_type": "water",
              "land_class": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.644920170723645, 39.94472353869633]),
            {
              "land_type": "water",
              "land_class": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.630715191780774, 39.944098404321046]),
            {
              "land_type": "water",
              "land_class": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.626638234078137, 39.94189393751863]),
            {
              "land_type": "water",
              "land_class": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.620844662605969, 39.94093974329594]),
            {
              "land_type": "water",
              "land_class": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.7326806411664935, 39.97001719975738]),
            {
              "land_type": "water",
              "land_class": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.724204860679433, 39.97457224260515]),
            {
              "land_type": "water",
              "land_class": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.710193000785634, 39.97259897611279]),
            {
              "land_type": "water",
              "land_class": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.69938544485816, 39.96827610232438]),
            {
              "land_type": "water",
              "land_class": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.73208693716773, 39.955974012314385]),
            {
              "land_type": "water",
              "land_class": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.739167968967046, 39.96215822727892]),
            {
              "land_type": "water",
              "land_class": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.670485682538605, 40.0328021923166]),
            {
              "land_type": "water",
              "land_class": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.665507502606965, 40.03543088267659]),
            {
              "land_type": "water",
              "land_class": 1,
              "system:index": "23"
            })]),
    vegetation = 
    /* color: #34a03f */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-4.734300784225085, 39.97520798480635]),
            {
              "land_type": "vegetation",
              "land_class": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.693831614608386, 39.97556974078497]),
            {
              "land_type": "vegetation",
              "land_class": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.68597810661278, 39.975931494848716]),
            {
              "land_type": "vegetation",
              "land_class": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.722499064559558, 39.98689831120056]),
            {
              "land_type": "vegetation",
              "land_class": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.726511649245837, 39.9885094792335]),
            {
              "land_type": "vegetation",
              "land_class": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.629659008829396, 39.981379903243834]),
            {
              "land_type": "vegetation",
              "land_class": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.66600830539922, 39.977302162595606]),
            {
              "land_type": "vegetation",
              "land_class": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.660257649271291, 39.9819718131123]),
            {
              "land_type": "vegetation",
              "land_class": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.651116680948537, 39.9832871500172]),
            {
              "land_type": "vegetation",
              "land_class": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.648970913736623, 39.983221383773355]),
            {
              "land_type": "vegetation",
              "land_class": 2,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.6326201675818375, 39.98900857089687]),
            {
              "land_type": "vegetation",
              "land_class": 2,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.612964939920705, 39.980064529622304]),
            {
              "land_type": "vegetation",
              "land_class": 2,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.644121479837697, 39.97480278192251]),
            {
              "land_type": "vegetation",
              "land_class": 2,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.628972363321584, 39.99098136354482]),
            {
              "land_type": "vegetation",
              "land_class": 2,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.618844342081349, 39.99019225332289]),
            {
              "land_type": "vegetation",
              "land_class": 2,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.609445881693166, 39.9916060693385]),
            {
              "land_type": "vegetation",
              "land_class": 2,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.663948368875783, 39.990882725265635]),
            {
              "land_type": "vegetation",
              "land_class": 2,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.569238516459659, 40.00918708768827]),
            {
              "land_type": "vegetation",
              "land_class": 2,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.573015066752628, 39.996300581711985]),
            {
              "land_type": "vegetation",
              "land_class": 2,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.548467489848331, 40.00754353603387]),
            {
              "land_type": "vegetation",
              "land_class": 2,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.577134939799503, 40.00182366781029]),
            {
              "land_type": "vegetation",
              "land_class": 2,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.566406103739933, 39.9928155475392]),
            {
              "land_type": "vegetation",
              "land_class": 2,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.603484961161808, 40.01089633943079]),
            {
              "land_type": "vegetation",
              "land_class": 2,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.763902517924503, 40.01227685766873]),
            {
              "land_type": "vegetation",
              "land_class": 2,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.716695639262394, 40.00655738604685]),
            {
              "land_type": "vegetation",
              "land_class": 2,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.751800390849308, 40.020559380714126]),
            {
              "land_type": "vegetation",
              "land_class": 2,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.746736380229191, 40.02121668075623]),
            {
              "land_type": "vegetation",
              "land_class": 2,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.74300274528046, 40.022925631231935]),
            {
              "land_type": "vegetation",
              "land_class": 2,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.727982374797062, 40.026573440000824]),
            {
              "land_type": "vegetation",
              "land_class": 2,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.772142264018253, 40.02585046637339]),
            {
              "land_type": "vegetation",
              "land_class": 2,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.728163670105407, 39.93761800061548]),
            {
              "land_type": "vegetation",
              "land_class": 2,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.737433384460876, 39.936565030091245]),
            {
              "land_type": "vegetation",
              "land_class": 2,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.711941669983337, 39.93478810559361]),
            {
              "land_type": "vegetation",
              "land_class": 2,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.705075214905212, 39.93103666903668]),
            {
              "land_type": "vegetation",
              "land_class": 2,
              "system:index": "33"
            })]),
    urban = 
    /* color: #ff0000 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-4.677556845317081, 40.01119216711808]),
            {
              "land_type": "urban",
              "land_class": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.713176581034855, 40.02690206184405]),
            {
              "land_type": "urban",
              "land_class": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.7183264223434485, 40.029728144347004]),
            {
              "land_type": "urban",
              "land_class": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.707597586283878, 40.03288270279641]),
            {
              "land_type": "urban",
              "land_class": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.70030197776337, 40.02374722680106]),
            {
              "land_type": "urban",
              "land_class": 3,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.675926062236027, 40.00797086327083]),
            {
              "land_type": "urban",
              "land_class": 3,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.625114294657902, 40.00350023055589]),
            {
              "land_type": "urban",
              "land_class": 3,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.62065109885712, 40.0046836618246]),
            {
              "land_type": "urban",
              "land_class": 3,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.705537649760441, 40.02690206184405]),
            {
              "land_type": "urban",
              "land_class": 3,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.7416723696090735, 39.97949844905595]),
            {
              "land_type": "urban",
              "land_class": 3,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.727681967387394, 39.980484989818905]),
            {
              "land_type": "urban",
              "land_class": 3,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.7526586977340735, 39.97463130616796]),
            {
              "land_type": "urban",
              "land_class": 3,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.702242802185485, 39.95952927196519]),
            {
              "land_type": "urban",
              "land_class": 3,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.688166569275329, 39.95485808807763]),
            {
              "land_type": "urban",
              "land_class": 3,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.650143574280212, 39.956173946805194]),
            {
              "land_type": "urban",
              "land_class": 3,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.632548283142516, 39.9664367759564]),
            {
              "land_type": "urban",
              "land_class": 3,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.586972187561462, 39.944856734383436]),
            {
              "land_type": "urban",
              "land_class": 3,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.612592648071716, 39.984458785358036]),
            {
              "land_type": "urban",
              "land_class": 3,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.612463902039001, 39.9872208630665]),
            {
              "land_type": "urban",
              "land_class": 3,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.568518589539001, 39.9834065359047]),
            {
              "land_type": "urban",
              "land_class": 3,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.569419811768005, 39.984458785358036]),
            {
              "land_type": "urban",
              "land_class": 3,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.571436832947204, 39.98265022159998]),
            {
              "land_type": "urban",
              "land_class": 3,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.77803130011029, 39.97814504554804]),
            {
              "land_type": "urban",
              "land_class": 3,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.769705723328063, 39.98051276634546]),
            {
              "land_type": "urban",
              "land_class": 3,
              "system:index": "23"
            })]),
    AOI = 
    /* color: #b3beb0 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-4.796055119358682, 40.041932622805035],
          [-4.796055119358682, 39.92513229798703],
          [-4.5344431808821195, 39.92513229798703],
          [-4.5344431808821195, 40.041932622805035]]], null, false),
    bare_soil = 
    /* color: #b1b864 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-4.739922474426696, 39.95742398914573]),
            {
              "land_type": "bare_soil",
              "land_class": 4,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.716233204407165, 39.97946045611964]),
            {
              "land_type": "bare_soil",
              "land_class": 4,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.686621616882751, 39.985182197456325]),
            {
              "land_type": "bare_soil",
              "land_class": 4,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.738549183411071, 39.95156833049464]),
            {
              "land_type": "bare_soil",
              "land_class": 4,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.683703373474548, 39.94163230210817]),
            {
              "land_type": "bare_soil",
              "land_class": 4,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.711684177917907, 39.94841001435039]),
            {
              "land_type": "bare_soil",
              "land_class": 4,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.72859282354779, 39.954265943390354]),
            {
              "land_type": "bare_soil",
              "land_class": 4,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.713400791687438, 39.96091082859133]),
            {
              "land_type": "bare_soil",
              "land_class": 4,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.666880558533141, 39.95216049853719]),
            {
              "land_type": "bare_soil",
              "land_class": 4,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.642075489563415, 39.94847581409074]),
            {
              "land_type": "bare_soil",
              "land_class": 4,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.668082188171813, 39.95880558830663]),
            {
              "land_type": "bare_soil",
              "land_class": 4,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.618643711609313, 39.95709503285039]),
            {
              "land_type": "bare_soil",
              "land_class": 4,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.647826145691345, 39.9643974902373]),
            {
              "land_type": "bare_soil",
              "land_class": 4,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.657610844177673, 39.9681470977198]),
            {
              "land_type": "bare_soil",
              "land_class": 4,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.654520939392516, 39.93728894906706]),
            {
              "land_type": "bare_soil",
              "land_class": 4,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.65443510870404, 40.02706126773315]),
            {
              "land_type": "bare_soil",
              "land_class": 4,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.678725193542907, 40.022000327631]),
            {
              "land_type": "bare_soil",
              "land_class": 4,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.669541309875915, 40.008064371008636]),
            {
              "land_type": "bare_soil",
              "land_class": 4,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.690483997864196, 40.00379098411652]),
            {
              "land_type": "bare_soil",
              "land_class": 4,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.714945744080016, 40.01430960911772]),
            {
              "land_type": "bare_soil",
              "land_class": 4,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.616412113708923, 40.017464880543]),
            {
              "land_type": "bare_soil",
              "land_class": 4,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.615993775827447, 39.96808253591169]),
            {
              "land_type": "bare_soil",
              "land_class": 4,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.606809892160455, 39.97104260986938]),
            {
              "land_type": "bare_soil",
              "land_class": 4,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.608698167306939, 39.9772254619257]),
            {
              "land_type": "bare_soil",
              "land_class": 4,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.5886996168919, 39.96275407977348]),
            {
              "land_type": "bare_soil",
              "land_class": 4,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.63590649555401, 39.996756967738854]),
            {
              "land_type": "bare_soil",
              "land_class": 4,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.5855238814182675, 39.993403469928964]),
            {
              "land_type": "bare_soil",
              "land_class": 4,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.588613786203424, 40.00563307883454]),
            {
              "land_type": "bare_soil",
              "land_class": 4,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.643802918893853, 40.00162253449441]),
            {
              "land_type": "bare_soil",
              "land_class": 4,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.756412782175103, 40.00228001692448]),
            {
              "land_type": "bare_soil",
              "land_class": 4,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.755897798044244, 39.99314044352884]),
            {
              "land_type": "bare_soil",
              "land_class": 4,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.762163438303033, 40.002674503343535]),
            {
              "land_type": "bare_soil",
              "land_class": 4,
              "system:index": "31"
            })]),
    clouds = 
    /* color: #ffffff */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-4.76012007583878, 39.94397891620741]),
            {
              "land_type": "cloud",
              "land_class": 5,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.803378742830968, 39.961875272153975]),
            {
              "land_type": "cloud",
              "land_class": 5,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.802348774569249, 39.94411052414882]),
            {
              "land_type": "cloud",
              "land_class": 5,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.742953938143468, 39.958059530232326]),
            {
              "land_type": "cloud",
              "land_class": 5,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.718749683993077, 39.965953933226686]),
            {
              "land_type": "cloud",
              "land_class": 5,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.6368672071864365, 39.962796281406085]),
            {
              "land_type": "cloud",
              "land_class": 5,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.635665577547765, 39.95424357538531]),
            {
              "land_type": "cloud",
              "land_class": 5,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.590003651278233, 39.95332245093577]),
            {
              "land_type": "cloud",
              "land_class": 5,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.60631148208878, 39.959506905681614]),
            {
              "land_type": "cloud",
              "land_class": 5,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.57386748184464, 39.967401141571564]),
            {
              "land_type": "cloud",
              "land_class": 5,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.58708540787003, 39.95792794912693]),
            {
              "land_type": "cloud",
              "land_class": 5,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.599616688387608, 39.963059424627986]),
            {
              "land_type": "cloud",
              "land_class": 5,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.742782276766515, 39.9443737392722]),
            {
              "land_type": "cloud",
              "land_class": 5,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.729221027987218, 39.94411052414882]),
            {
              "land_type": "cloud",
              "land_class": 5,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.724242848055577, 39.94937463421291]),
            {
              "land_type": "cloud",
              "land_class": 5,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.541251820223546, 39.990420789748406]),
            {
              "land_type": "cloud",
              "land_class": 5,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.5393635450770615, 39.9877903653026]),
            {
              "land_type": "cloud",
              "land_class": 5,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.598243397371983, 40.026315954859676]),
            {
              "land_type": "cloud",
              "land_class": 5,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.604680699007726, 40.01284104546437]),
            {
              "land_type": "cloud",
              "land_class": 5,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.59532515396378, 40.01658799466819]),
            {
              "land_type": "cloud",
              "land_class": 5,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.587686222689366, 40.01763973290568]),
            {
              "land_type": "cloud",
              "land_class": 5,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.5888020216395615, 40.027696161172656]),
            {
              "land_type": "cloud",
              "land_class": 5,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-4.601934116976476, 40.02546152743369]),
            {
              "land_type": "cloud",
              "land_class": 5,
              "system:index": "22"
            })]),
    imageVisParam = {"opacity":0.99,"bands":["classification"],"min":1.3,"max":3.7,"palette":["37adfa","2db314","2c3e50","fdebd0"]};
    

////////////////////////// Classification //////////////////////////
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
