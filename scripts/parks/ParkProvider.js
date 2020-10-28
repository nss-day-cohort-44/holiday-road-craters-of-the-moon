let parks = []

export const useParks = () => {
    return parks.slice()
}

export const getParks = () => {
    return fetch("https://criminals.glassdale.us/officers")//change this fetch
        .then(response => response.json())
        .then(
            parsedParks => {
                //console.table(parsedOfficers)
                parks = parsedParks
            }
        )
}