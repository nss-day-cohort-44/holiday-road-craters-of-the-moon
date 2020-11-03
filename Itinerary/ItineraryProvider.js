const eventHub = document.querySelector("#mainContainer")

const dispatchItinerarySaveEvent = () => {
    const ItineraryStateChangedEvent = new CustomEvent("ItineraryStateChangedEvent")
console.log("ItineraryStateChangedEvent", ItineraryStateChangedEvent)
    eventHub.dispatchEvent(ItineraryStateChangedEvent)
}


let itinerary = []

// Getting entries from the api

export const getItinerary = () => {
    return fetch('http://localhost:8088/itineraries')
        .then(response => response.json())
        .then(parsedItinerary => {
            itinerary = parsedItinerary
        })

}
console.log("HERE", getItinerary)

export const useItinerary = () => {
    return itinerary.slice()
}

export const saveItinerary = (itinerary) => {
    return fetch('http://localhost:8088/itineraries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(itinerary)
    })
    .then(getItinerary)
    .then(dispatchItinerarySaveEvent)
}

// console.log("SaveItinerary", saveItinerary)

