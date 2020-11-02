import "./ParkSelect.js"
import { getParks, useParks } from "./ParkProvider.js"
import { Park } from "./Park.js"



const eventHub = document.querySelector("#mainContainer")
const parksContainer = document.querySelector("#national-parks")

eventHub.addEventListener("parkSelected", changeEvent => {

    const selectedParkName = changeEvent.detail.selectedPark
        const parkArray = useParks()
        const theSelectedPark = parkArray.find(
          (parksObj) => parksObj.fullName === selectedParkName)
          
        render(theSelectedPark)
      })

    

export const ParkList = () => {

    getParks()
        .then(() => {
            const parkArray = useParks()

            let parkHTMLRepresentations = ""

            for (const park of parkArray) {

                parkHTMLRepresentations += Park(park)
                    
                    parksContainer.innerHTML = `
                    <h3>Parks</h3>
          <section class="itinerary-preview">
            ${parkHTMLRepresentations}
          </section>
                    `
            }
        })
    }

  
    // PUT IN BECAUSE RENDER WAS UNDEFINED



    const render = (parkObj) => {

        const parkHTMLRepresentions = Park(parkObj)

            parksContainer.innerHTML = `
            <h3>Park</h3>
            <section id="national-parks">
            ${parkHTMLRepresentions}
            </section>
            
            
            `
        }
