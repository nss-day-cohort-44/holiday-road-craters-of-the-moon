import { getBizarries, useBizarries } from "./AttractionProvider.js"
import { Bizarre } from "./Attraction.js"

Bizarre

const bizarriesFilterContainer = document.querySelector(".nav-button-bizarre")
const eventHub = document.querySelector("#mainContainer")
// console.log("here", eventHub)

export const bizarreSelect = () => {

    getBizarries()
    .then(() => {
const bizarriesArray = useBizarries()

render(bizarriesArray)

    })

    const render = (bizarries) => {
       
        bizarriesFilterContainer.innerHTML = `
            <select class="dropdown" id="bizarreSelect">
                <option value="0">Please select a bizarre...</option>
                ${bizarries.map(
                    bizarreObj => {
                        return `<option value="${bizarreObj.name}">${bizarreObj.name}</option>`
                        
                    }
                ).join("")
                }
            </select>
        `
        
        }
    }
    //console.log("render", render)

    eventHub.addEventListener("change", changeEvent => {
        if (changeEvent.target.id === "bizarreSelect") {
            // Get the name of the selected officer
            const selectedBizarre = changeEvent.target.value
            
    
            // Define a custom event
            const customEvent = new CustomEvent("bizarreSelected", {
                detail: {
                    selectedBizarre: selectedBizarre,
        
                }
            })
    console.log(customEvent)
            // Dispatch event to event hub
            eventHub.dispatchEvent(customEvent)
        }
    })