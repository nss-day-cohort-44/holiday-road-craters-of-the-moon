export const Park = (parkObj) => {
    return `
    <p id="national-parks">
        ${parkObj.fullName}
        ${parkObj.latLong}
        
        <button class="park-detail">Details</button>
    
        </p>
        `
}

//  console.log("Full Name", parkObj.fullName)
 const eventHub = document.querySelector("#mainContainer")
 eventHub.addEventListener("click", (changeEvent) => {
     const states = changeEvent.target.value
     console.log("buttonClicked", changeEvent)
     if (changeEvent.target.className === "park-detail"){
         const parkButtonClicked = new CustomEvent("parkButtonClicked",{
            detail: {
                states: states
              }
            })
         eventHub.dispatchEvent(parkButtonClicked)
         console.log("buttonClicked",eventHub)
     }
 
    

 })

// eventHub.dispatchEvent(myCustomEvent)
    // const [] = eventObj.target.data.split("--")
    
    // check to see if the button that was clicked IS in fact the alibi button
//     if(eventObj.target.id.startsWith("associates--")){
//       console.log("button was clicked:", nameOfId, criminalId)
//       // build a custom event
//       const myCustomEvent = new CustomEvent("alibiButtonClicked", {
//         detail: {
//           criminalId: criminalId
//         }
//       })
  
//       // dispatch the event to the eventHub so that other modules can listen for this event
//       eventHub.dispatchEvent(myCustomEvent)
//     }
//   })