import { useBizarries } from "./AttractionProvider.js"
import { Bizarre } from "./Attraction.js"

// const Bizarre = bizarreObj

const eventHub = document.querySelector("#mainContainer")

eventHub.addEventListener("bizarreButtonClicked", (eventObj) => {
    console.log("bizarre button clicked from details", eventObj)
    const arrayOfBizarries = useBizarries()
        const foundBizarre = arrayOfBizarries.find((bizarreObj) => {
            
            //console.log("bizarreObj.id", bizarreObj.id)
            //console.log("event.BieventObj.detail.bizarreId", eventObj.detail.bizarreId)
            return bizarreObj.id === eventObj.detail.bizarreId
        })
        console.log("HELP ME", foundBizarre)
        detailList(foundBizarre)
    })
    const detailList = (bizarreObj) => {
        //debugger
        render(bizarreObj)
        console.log("LOOK AT ME", detailList)
    }
 
 const render = (bizarreObj) => {
     const contentTarget = document.querySelector(`#bizarre-locations`)
     contentTarget.innerHTML += `
     <div class="bizarre-detail">
                 <p>City: ${bizarreObj.city}</p>
                 <p>State: ${bizarreObj.state}</p>
                 <p>Description: ${bizarreObj.description}</p>
                 
                 
     </div>`
    } 
