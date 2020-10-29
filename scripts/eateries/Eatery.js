export const Eatery = (eateryObj) => {
    return `
    <p id="eateries">
        ${eateryObj.businessName}
        <button class="eatery-detail">Details</button>
        </p>
        `
}