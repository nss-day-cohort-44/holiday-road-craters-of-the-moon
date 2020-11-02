import "./AttractionSelect.js"
import { getBizarries, useBizarries } from "./AttractionProvider.js"
import { Bizarre } from "./Attraction.js"

const eventHub = document.querySelector("#mainContainer")
const bizarriesContainer = document.querySelector("#bizarre-locations")

eventHub.addEventListener("bizarreSelected", changeEvent => {

    const selectedBizarreName = changeEvent.detail.selectedBizarre
        const bizarreArray = useBizarries()
        const theSelectedBizarre = bizarreArray.find(
          (bizarreObj) => bizarreObj.name === selectedBizarreName)
          
        render(theSelectedBizarre)
      })

      export const BizarreList = () => {

        getBizarries()
            .then(() => {
                const bizarreArray = useBizarries()
    
                let bizarreHTMLRepresentations = ""
    
                for (const bizarre of bizarreArray) {
    
                    bizarreHTMLRepresentations += Bizarre(bizarre)
                        
                    bizarriesContainer.innerHTML = `
                        <h3>Bizarries</h3>
              <section class="itinerary-preview">
                ${bizarreHTMLRepresentations}
              </section>
                        `
                }
            })
        }

        const render = (bizarreObj) => {

            const bizarreHTMLRepresentions = Bizarre(bizarreObj)
    
            bizarriesContainer.innerHTML = `
                <h3>Bizarre</h3>
                <section id="bizarre-locations">
                ${bizarreHTMLRepresentions}
                </section>
                `
            }