
import {graphhopperKey} from './scripts/Settings.js';
graphhopperKey()



export const getParks = () => {
    return fetch("")
        .then(response => response.json())
        .then(parsedGetParks => {
                getParks = parsedGetParks
            }
        )
}