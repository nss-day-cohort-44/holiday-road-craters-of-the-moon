import { useEateries } from "./EateryProvider.js"



const eventHub = document.querySelector("#mainContainer")

eventHub.addEventListener("eateryButtonClicked", (eventObj) => {
    console.log("eatery button clicked from details", eventObj)
    const arrayOfEateries = useEateries()
        const foundEatery = arrayOfEateries.find((eateryObj) => {
            
            //console.log("bizarreObj.id", bizarreObj.id)
            //console.log("event.BieventObj.detail.bizarreId", eventObj.detail.bizarreId)
            return eateryObj.id === eventObj.detail.eateryId
        })
        console.log("HELP ME", foundEatery)
   
         detailList(foundEatery)
    })
     const detailList = (eateryObj) => {
         render(eateryObj)
         console.log("LOOK AT ME", detailList)
    }
 
  const render = (eateryObj) => {
      const contentTarget = document.querySelector(`#eateries`)
     contentTarget.innerHTML += `
      <div class="eatery-detail">
                  <p>City: ${eateryObj.city}</p>
                  <p>State: ${eateryObj.state}</p>
                  <p>Description: ${eateryObj.description}</p>
                 
                 
      </div>`
  }
