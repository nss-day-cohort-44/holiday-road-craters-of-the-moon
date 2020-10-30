
import {defaultKey} from "../Settings.js"

const eventHub = document.querySelector(".container")

let parks = []
export const useParks = () => {
    return parks.slice()
    
}
//console.log(useParks)
export const getParks = () => {
    return fetch(`https://developer.nps.gov/api/v1/parks?api_key=${defaultKey.npsKey}`)//change this fetch
        .then(response => response.json())
        .then(
            parsedParks => {
                parks = parsedParks.data
                console.log(parks)
                
            }
            
        )
        
}

