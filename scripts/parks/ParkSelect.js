import { useParks, getParks } from "./ParkProvider.js";



const parksFilterContainer = document.querySelector(".nav-button-park")
const eventHub = document.querySelector(".container")
console.log(eventHub)

export const parkSelect = () => {

    getParks()
    .then(() => {
const parksArray = useParks()

render(parksArray)

    })

    const render = (parks) => {
        parksFilterContainer.innerHTML = `
            <select class="dropdown" id="parkSelect">
                <option value="0">Please select a park...</option>
                ${parks.map(
                    parksObj => {
                        return `<option value="${parksObj.fullName}">${parksObj.fullName}</option>`
                    }
                ).join("")
                }
            </select>
        `
    
        }
    }

    eventHub.addEventListener("change", changeEvent => {
        if (changeEvent.target.id === "parkSelect") {
            // Get the name of the selected officer
            const selectedPark = changeEvent.target.value
    
            // Define a custom event
            const customEvent = new CustomEvent("parkSelected", {
                detail: {
                    selectedPark: selectedPark
                }
            })
    console.log(customEvent)
            // Dispatch event to event hub
            eventHub.dispatchEvent(customEvent)
        }
    })
   

    