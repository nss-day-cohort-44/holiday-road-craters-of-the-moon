export const Bizarre = (bizarreObj) => {
    return `
    <p id="bizarries">
        ${bizarreObj.name}
        <button id="bizarre-detail--${bizarreObj.id}">Details</button>
        </p>
        `
}


const eventHub = document.querySelector("#mainContainer")

eventHub.addEventListener("click", (event) => {
    if (event.target.id.startsWith("bizarre-detail--")){
       const [buttonName, bizarreId] = event.target.id.split("--")
       
        const bizarreButtonClicked = new CustomEvent("bizarreButtonClicked",{
           detail: {
               bizarreId: parseInt(bizarreId)
               }
           })
           console.log("BIzarre buttton clicked", bizarreButtonClicked)
        eventHub.dispatchEvent(bizarreButtonClicked)
    }

   

})