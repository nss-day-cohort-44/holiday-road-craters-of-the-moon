export const Park = (parkObj) => {
    return `
    <p id="national-parks">
        ${parkObj.fullName}
        ${parkObj.latLong}
        <button class="park-detail">Details</button>
        </p>
        `
}

// console.log("Full Name", parksObj.fullName)

