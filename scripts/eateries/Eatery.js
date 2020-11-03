export const Eatery = (eateryObj) => {
    return `
    <p id="eateries">
        ${eateryObj.businessName}
        <button id="eatery-detail--${eateryObj.id}">Details</button>
        </p>
        `
}

const eventHub = document.querySelector("#mainContainer")

eventHub.addEventListener("click", (event) => {
    if (event.target.id.startsWith("eatery-detail--")){
       const [buttonName, eateryId] = event.target.id.split("--")
       
        const eateryButtonClicked = new CustomEvent("eateryButtonClicked",{
           detail: {
               eateryId: parseInt(eateryId)
               }
           })
           console.log("eatery buttton clicked", eateryButtonClicked)
        eventHub.dispatchEvent(eateryButtonClicked)
    }

   

})