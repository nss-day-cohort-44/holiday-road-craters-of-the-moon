import "./ParkSelect.js"
import { getParks, useParks } from "./ParkProvider.js"
import { Park } from "./Park.js"



const eventHub = document.querySelector("#mainContainer")
const parksContainer = document.querySelector("#national-parks")

// modal


// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

// This renders the selected park name to the DOM
eventHub.addEventListener("parkSelected", changeEvent => {

    const selectedParkName = changeEvent.detail.selectedPark
        const parkArray = useParks()
        const theSelectedPark = parkArray.find(
          (parksObj) => parksObj.fullName === selectedParkName)
          

          const parkLocation = parkArray.find(
            (parksObj) => parksObj.latLong === selectedParkName)

        render(theSelectedPark, parkLocation)
      })

      
        
//use a function like this to get the weather?

    

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
