export const ItineraryAsHTML = (itineraryObj) => {
    return `
    <div class="note">
    <h5>Saved Itinerary</h5>
    <p>Park: ${itineraryObj.park}</p>
    <p>Bizarrie: ${itineraryObj.bizarrie}</p>
    <p>Eatery: ${itineraryObj.eatery}</p>
    
</div>
    `
}