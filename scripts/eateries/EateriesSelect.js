import { getEateries, useEateries } from "./EateryProvider.js"
import { Eatery } from "./Eatery.js"

Eatery
getEateries

const eateriesFilterContainer = document.querySelector(".nav-button-eatery")
const eventHub = document.querySelector("#mainContainer")
console.log("here", eventHub)

export const eaterySelect = () => {

    getEateries()
    .then(() => {
const eateriesArray = useEateries()

render(eateriesArray)

    })

    const render = (eateries) => {
       
        eateriesFilterContainer.innerHTML = `
            <select class="dropdown" id="eaterySelect">
                <option value="0">Please select a eatery...</option>
                ${eateries.map(
                    eateryObj => {
                        return `<option value="${eateryObj.businessName}">${eateryObj.businessName}</option>`
                        
                    }
                ).join("")
                }
            </select>
        `
        
        }
    }
    //console.log("render", render)

    eventHub.addEventListener("change", changeEvent => {
        if (changeEvent.target.id === "eaterySelect") {
            // Get the name of the selected officer
            const selectedEatery = changeEvent.target.value
            
    
            // Define a custom event
            const customEvent = new CustomEvent("eaterySelected", {
                detail: {
                    selectedEatery: selectedEatery,
        
                }
            })
    console.log(customEvent)
            // Dispatch event to event hub
            eventHub.dispatchEvent(customEvent)
        }
    })
   