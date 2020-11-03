import { parkSelect } from "./parks/ParkSelect.js";
import "./parks/ParkPreview.js";

import { eaterySelect } from "./eateries/EateriesSelect.js";
import "./eateries/EateryPreview.js";
import { bizarreSelect } from "./attractions/AttractionSelect.js";
import "./attractions/AttractionPreview.js";
import "./parks/ParkDetails.js";
import { useParks } from "./parks/ParkProvider.js";
// import {renderDetailButton} from "./parks/ParkDetails.js"

import "./weather/WeatherProvider.js"
//import "./weather/WeaterPreview.js"

import "./attractions/AttractionDetails.js"
import "./eateries/Eatery.js"


import "./eateries/EateryDetails.js"
//import { WeatherList } from "./weather/WeaterPreview.js";

useParks()
parkSelect()
eaterySelect()
bizarreSelect()
//WeatherList()

// renderDetailButton()