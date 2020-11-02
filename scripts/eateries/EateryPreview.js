import "./EateriesSelect.js"
import { getEateries, useEateries } from "./EateryProvider.js"
import { Eatery } from "./Eatery.js"

const eventHub = document.querySelector("#mainContainer")
const eateriesContainer = document.querySelector("#eateries")

eventHub.addEventListener("eaterySelected", changeEvent => {

    const selectedEateryName = changeEvent.detail.selectedEatery
        const eateryArray = useEateries()
        const theSelectedEatery = eateryArray.find(
          (eateryObj) => eateryObj.businessName === selectedEateryName)
          
        render(theSelectedEatery)
      })

      export const EateryList = () => {

        getEateries()
            .then(() => {
                const eateryArray = useEateries()
    
                let eateryHTMLRepresentations = ""
    
                for (const eatery of eateryArray) {
    
                    eateryHTMLRepresentations += Eatery(eatery)
                        
                    eateriesContainer.innerHTML = `
                        <h3>Eateries</h3>
              <section class="itinerary-preview">
                ${eateryHTMLRepresentations}
              </section>
                        `
                }
            })
        }

        const render = (eateryObj) => {

            const eateryHTMLRepresentions = Eatery(eateryObj)
    
                eateriesContainer.innerHTML = `
                <h3>Eatery</h3>
                <section id="eateries">
                ${eateryHTMLRepresentions}
                </section>
                
                
                `
            }