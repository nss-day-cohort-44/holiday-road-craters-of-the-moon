import { parkSelect } from "./parks/ParkSelect.js";
import "./parks/ParkPreview.js"
import { getEateries, useEateries } from "./eateries/EateryProvider.js";
import { eaterySelect } from "./eateries/EateriesSelect.js";
import { getBizarries, useBizarries } from "./attractions/AttractionProvider.js";
import { bizarreSelect } from "./attractions/AttractionSelect.js";


parkSelect()
useEateries()
getEateries()
eaterySelect()
getBizarries()
useBizarries()
bizarreSelect()
