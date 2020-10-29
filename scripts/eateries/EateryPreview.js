export const EateryList = () => {

    getEateries()
        .then(() => {
            const eateryArray = useEateries()

            let parkHTMLRepresentations = ""

            for (const park of parkArray) {

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