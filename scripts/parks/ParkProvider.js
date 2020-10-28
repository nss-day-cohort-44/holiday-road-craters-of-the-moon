
import {defaultKey} from "../Settings.js"

let parks =[]
export const useParks = () => {
    return parks.slice()
}
export const getParks = () => {
    return fetch(`https://developer.nps.gov/api/v1/parks?api_key=${defaultKey.npsKey}&limit=10`)//change this fetch
        .then(response => response.json())
        .then(
            parsedParks => {
                parks = parsedParks.data
                
            }
        )
}
