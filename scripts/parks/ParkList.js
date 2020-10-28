import { Park } from "./Park.js"
import { getParks, useParks } from "./ParkProvider.js"

Park()

const eventHub = document.querySelector(".container")
const parksContainer = document.querySelector("#national-parks")

eventHub.addEventListener("parkSelected", changeEvent => {
    // console.log("HERE", changeEvent) -- THIS IS WHERE THE WORK GOES

})

export const ParkList = () => {

    getParks()
        .then(() => {
            const parkArray = useParks()

            let parksHTMLRepresentations = ""

            for (const park of parkArray) {

                parksHTMLRepresentations += Park(park)
                    
                    parksContainer.innerHTML = `
                    <h3>Parks</h3>
          <section class="parksList">
            ${parksHTMLRepresentations}
          </section>
                    `
            }
        })
    }